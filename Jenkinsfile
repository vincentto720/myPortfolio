pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        
        stage('Build Backend') {
            steps {
                echo 'Building Backend...'
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                echo 'Building Frontend...'
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here later
            }
        }
        
        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh 'docker-compose build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}