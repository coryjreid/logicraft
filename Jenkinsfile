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
        stage('Checkout Changes') {
            steps {
                checkout poll: false, scm: scmGit(branches: [[name: '*/1.19.2']], extensions: [], userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/coryjreid/logicraft.git']])
                scmSkip(deleteBuild: false, skipPattern:'.*\\[nobuild\\].*')
            }
        }

        stage('Test Modpack') {
            steps {
                echo 'Add execute permission for Packwiz'
                sh 'chmod +x $WORKSPACE/bin/packwiz'
                echo 'Serve modpack on localhost:9090'
                sh 'nohup bash -c "$WORKSPACE/bin/packwiz serve --basic -p 9090 2>&1 &"'
                echo 'Create test_install directory'
                sh 'mkdir $WORKSPACE/test_install'
                echo 'Download packwiz-installer-bootstrap.jar'
                sh 'cd $WORKSPACE/test_install && wget https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar'
                echo 'Run install to validate modpack'
                sh 'cd $WORKSPACE/test_install && java -jar $WORKSPACE/test_install/packwiz-installer-bootstrap.jar --no-gui http://localhost:9090/pack.toml'
            }
            post {
                cleanup {
                    sh 'git reset --hard'
                    sh 'git clean -xdf'
                }
            }
        }

        stage('Set Modpack Version') {
            steps {
                echo 'Add execute permission for Packwiz'
                sh 'chmod +x $WORKSPACE/bin/packwiz'
                echo 'Add execute permission for Dasel'
                sh 'chmod +x $WORKSPACE/bin/dasel'
                echo 'Update modpack version'
                sh '$WORKSPACE/bin/dasel put -f $WORKSPACE/config/bcc-common.toml -r toml -v Logicraft general.modpackName'
                sh '$WORKSPACE/bin/dasel put -f $WORKSPACE/config/bcc-common.toml -r toml -v 323471 general.modpackProjectID'
                sh '$WORKSPACE/bin/dasel put -f $WORKSPACE/config/bcc-common.toml -r toml -v `date +%Y%m%d%H%M%S` general.modpackVersion'
                echo 'Refresh pack definition'
                sh '$WORKSPACE/bin/packwiz refresh'
            }
        }

        stage('Deploy website') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'nginx-vm', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    script {
                        webserverRemote.user = USERNAME
                        webserverRemote.password = PASSWORD
                        def websiteRootPath = '/var/www/logicraft.coryjreid.com/html'
                        
                        echo 'Cleanup website root'
                        sshCommand remote: webserverRemote, command: "cd ${websiteRootPath} && rm -rf ./*"
                        
                        echo 'Copy pack to website'
                        sh 'scp -i ~/.ssh/id_rsa -r $WORKSPACE/* $USERNAME@' + webserverRemote.host + ':' + websiteRootPath

                        echo 'Generate index page'
                        sshCommand remote: webserverRemote, command: "cd ${websiteRootPath} && markdown README.md > index.html"
                        echo 'Cleanup README'
                        sshCommand remote: webserverRemote, command: "rm ${websiteRootPath}/README.md"
                    }
                }
            }
        }

        stage('Deploy Minecraft server') {
            when {
                not {
                    changelog '.*\\[webonly\\].*'
                }
            }
            steps {
                echo 'Validate Minecraft server is running'
                script {
                    def r = sh script: 'docker ps --filter "name=^$SERVER_DOCKER_CONTAINER_NAME$$" --filter "status=running" --quiet', returnStdout: true
                    return (r != '')
                }

                echo 'Alert players of pending shutdown'
                alertPlayersAboutPendingShutdown(
                    env.SERVER_SHUTDOWN_WARNING_DURATION.toInteger(),
                    env.SERVER_DOCKER_CONTAINER_NAME)

                echo 'Perform shutdown'
                sh 'cd $SERVER_DIR && docker compose down'

                echo 'Wait for shutdown to complete'
                timeout(2) {
                    waitUntil(initialRecurrencePeriod: 15000) {
                        script {
                            def r = sh script: 'docker ps --filter "name=^$SERVER_DOCKER_CONTAINER_NAME$$" --filter "status=running" --quiet', returnStdout: true
                            return (r == '')
                        }
                    }
                }

                echo 'Cleanup server directory'
                script {
                    String removeCommand = 'rm -rf $SERVER_DIR/'
                    def dirs = ['config', 'defaultconfigs', 'kubejs', 'logs', 'local', 'mods', 'scripts', 'world/serverconfig']
                    for (int i = 0; i < dirs.size(); i++) {
                        sh removeCommand + dirs[i]
                    }
                    sh removeCommand + 'packwiz.json'
                }

                sh 'mv $WORKSPACE/defaultconfigs $SERVER_DIR/world/serverconfig'

                echo 'Start Minecraft server'
                sh 'cd $SERVER_DIR && docker compose up -d'
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
