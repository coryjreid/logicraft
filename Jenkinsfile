pipeline {
    agent any

    environment {
        SERVER_DIR = credentials('logicraft-server-path')
        SERVER_SHUTDOWN_WARNING_DURATION = credentials('logicraft-server-shutdown-warning-duration')
        SERVER_DOCKER_CONTAINER_NAME = credentials('logicraft-server-docker-container-name')
    }

    stages {
        stage('Do shutdown') {
            steps {
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
            }
        }
        stage('Cleanup server directory') {
            steps {
                script {
                    String removeCommand = 'rm -rf $SERVER_DIR/'
                    def dirs = ['config', 'defaultconfigs', 'kubejs', 'logs', 'local', 'mods', 'scripts', 'world/serverconfig', 'world/datapacks']
                    for (int i = 0; i < dirs.size(); i++) {
                        sh removeCommand + dirs[i]
                    }
                    sh removeCommand + 'packwiz.json'
                }
            }
        }
        stage('Setup new world config') {
            steps {
                sh 'mv $WORKSPACE/defaultconfigs $SERVER_DIR/world/serverconfig'
                sh 'mkdir $SERVER_DIR/world/datapacks'
                sh 'cp -r $WORKSPACE/global_packs/optional_data/* $SERVER_DIR/world/datapacks'
                sh 'cp -r $WORKSPACE/global_packs/required_data/* $SERVER_DIR/world/datapacks'
            }
        }
        stage('Restart server') {
            steps {
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
    say(container, "Please reach a safe point before shutdown")
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
