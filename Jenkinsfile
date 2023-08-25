def webserverRemote = [:]
webserverRemote.name = 'nginx'
webserverRemote.host = '192.168.1.245'
webserverRemote.allowAnyHosts = true

pipeline {
    agent any

    environment {
        SERVER_DIR = credentials('logicraft-server-path')
        SERVER_SHUTDOWN_WARNING_DURATION = credentials('logicraft-server-shutdown-warning-duration')
        SERVER_DOCKER_CONTAINER_NAME = credentials('logicraft-server-docker-container-name')
    }

    stages {
        stage('Test Modpack') {
            steps {
                echoBanner("TESTING MODPACK", ["CLONIING REPO...", "SETTING EXEC FLAG...", "RUNNING PACKWIZ SERVE...", "TESTING PACKWIZ INSTALL..."])
                checkout poll: false, scm: scmGit(branches: [[name: '*/1.19.2']], extensions: [], userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/coryjreid/logicraft.git']])
                sh 'chmod +x $WORKSPACE/bin/packwiz'
                sh 'nohup bash -c "$WORKSPACE/bin/packwiz serve --basic -p 9090 2>&1 &"'
                sh 'mkdir $WORKSPACE/test_install'
                sh 'cd $WORKSPACE/test_install && wget https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar'
                sh 'cd $WORKSPACE/test_install && java -jar $WORKSPACE/test_install/packwiz-installer-bootstrap.jar --no-gui http://localhost:9090/pack.toml'
            }
            post {
                cleanup {
                    sh 'git reset --hard'
                    sh 'git clean -xdf'
                }
            }
        }

        stage('Deploy website') {
            steps {
                echoBanner("DEPLOYING MODPACK WEBSITE", ["PULLING CHANGES...", "GENERATING INDEX PAGE..."])
                withCredentials([usernamePassword(credentialsId: 'nginx-vm', passwordVariable: 'pass', usernameVariable: 'username')]) {
                    script {
                        webserverRemote.user = username
                        webserverRemote.password = pass
                        
                        sshCommand remote: webserverRemote, command: "cd /var/www/logicraft.coryjreid.com/html && git pull && markdown README.md > index.html"
                    }
                }
            }
        }

        stage('Deploy Minecraft server') {
            steps {
                echoBanner("DEPLOYING SERVER", ["CHECK SERVER RUNNING...", "SHUTTING DOWN SERVER...", "AWAITING SERVER SHUTDOWN...", "REFRESHING SERVER CONFIGS...", "LAUNCHING SERVER..."])
                script {
                    def r = sh script: 'docker ps --filter "name=$SERVER_DOCKER_CONTAINER_NAME" --filter "status=running" --quiet', returnStdout: true
                    return (r != '')
                }

                alertPlayersAboutPendingShutdown(
                    env.SERVER_SHUTDOWN_WARNING_DURATION.toInteger(),
                    env.SERVER_DOCKER_CONTAINER_NAME)

                sh 'docker exec $SERVER_DOCKER_CONTAINER_NAME rcon-cli stop'

                timeout(2) {
                    waitUntil(initialRecurrencePeriod: 15000) {
                        script {
                            def r = sh script: 'docker ps --filter "name=$SERVER_DOCKER_CONTAINER_NAME" --filter "status=running" --quiet', returnStdout: true
                            return (r == '')
                        }
                    }
                }

                script {
                    String removeCommand = 'rm -rf $SERVER_DIR/'
                    def dirs = ['config', 'defaultconfigs', 'kubejs', 'logs', 'local', 'mods', 'scripts', 'world/serverconfig']
                    for (int i = 0; i < dirs.size(); i++) {
                        sh removeCommand + dirs[i]
                    }
                    sh removeCommand + 'packwiz.json'
                }

                sh 'mv $WORKSPACE/defaultconfigs $SERVER_DIR/world/serverconfig'

                sh 'docker start $SERVER_DOCKER_CONTAINER_NAME'
            }
        }
    }
}

def say(String container, String message) {
    sh 'docker exec ' + container + ' rcon-cli say ' + message
}

def alertPlayersAboutPendingShutdown(int duration, String container) {
    say(container, "Server will shutdown in ${duration} seconds for an update")
    say(container, "Please reach a safe point before shutdown and restart your game to pickup the updates")
    sleepOne()

    for(int i = (duration - 1); i >= 1; i--) {
        String seconds = (i == 1) ? "second" : "seconds"

        if ((i > 10 && i % 10 == 0) || (i <= 10)) {
            say(container, "Shutdown in " + i + " " + seconds)
        }
        sleepOne()
    }

    say(container, "Shutting down now")
    sleepOne()
}

def doShutdown(String container) {
    sh 'docker exec ' + container + ' rcon-cli stop'
}

def sleepOne() {
    sh 'sleep 1s'
}

def echoBanner(def ... msgs) {
   echo createBanner(msgs)
}

def errorBanner(def ... msgs) {
   error(createBanner(msgs))
}

def createBanner(def ... msgs) {
   return """
       ===========================================

       ${msgFlatten(null, msgs).join("\n        ")}

       ===========================================
   """
}

// flatten function hack included in case Jenkins security
// is set to preclude calling Groovy flatten() static method
// NOTE: works well on all nested collections except a Map
def msgFlatten(def list, def msgs) {
   list = list ?: []
   if (!(msgs instanceof String) && !(msgs instanceof GString)) {
       msgs.each { msg ->
           list = msgFlatten(list, msg)
       }
   }
   else {
       list += msgs
   }

   return  list
}
