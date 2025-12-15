pipeline {
    agent any
    
    environment {
        DOCKER_NETWORK = 'myportfolio-network'
    }
    
    stages {
        stage('Pull from GitHub') {
            steps {
                echo 'Pulling latest code from GitHub...'
                checkout scm
            }
        }
        
        stage('Stop Old Containers') {
            steps {
                echo 'Stopping old containers...'
                sh '''
                    docker stop backend frontend nginx 2>/dev/null || true
                    docker rm backend frontend nginx 2>/dev/null || true
                '''
            }
        }
        
        stage('Build Images') {
            steps {
                echo 'Building Docker images...'
                sh '''
                    docker build --no-cache -f frontend/Dockerfile -t myportfolio-frontend:latest ./frontend
                    docker build --no-cache  -f backend/Dockerfile -t myportfolio-backend:latest ./backend
                    docker build -t myportfolio-nginx:latest /home/ec2-user/infrastructure/nginx
                '''
            }
        }
        
        stage('Deploy Containers') {
            steps {
                echo 'Deploying containers...'
                sh '''
                    # Create network if it doesn't exist
                    docker network create myportfolio-network 2>/dev/null || true
                    
                    # Start backend
                    docker run -d \
                      --name backend \
                      --network myportfolio-network \
                      -p 3000:3000 \
                      -e PORT=3000 \
                      --restart unless-stopped \
                      myportfolio-backend:latest
                    
                    # Start frontend
                    docker run -d \
                      --name frontend \
                      --network myportfolio-network \
                      -e VITE_API_URL=http://nginx/api \
                      --restart unless-stopped \
                      myportfolio-frontend:latest
                    
                    # Start nginx
                    docker run -d \
                      --name nginx \
                      --network myportfolio-network \
                      -p 80:80 \
                      -p 443:443 \
                      -v /etc/letsencrypt:/etc/letsencrypt:ro \
                      --restart unless-stopped \
                      myportfolio-nginx:latest
                '''
            }
        }
        
        stage('Verify Deployment') {
            steps {
                echo 'Verifying containers are running...'
                sh 'docker ps --filter "name=backend" --filter "name=frontend" --filter "name=nginx"'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}