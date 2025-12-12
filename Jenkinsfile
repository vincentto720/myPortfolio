pipeline {
    agent any

    environment {
        // Each build uses a unique Docker Compose project name
        COMPOSE_PROJECT_NAME = "myportfolio-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Cleanup') {
            steps {
                echo "Stopping and removing old containers"
                sh '''
                docker compose down -v --remove-orphans
                '''
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
    }
}
