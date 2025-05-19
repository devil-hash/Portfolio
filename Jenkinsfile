pipeline {
    agent any

    tools {
        nodejs 'Nodejs 20'
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-tokken')
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
                bat '''
                if exist node_modules rmdir /s /q node_modules
                if exist package-lock.json del package-lock.json
                '''
            }
        }

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/devil-hash/Portfolio.git', branch: 'main'
            }
        }

        stage('Prepare Environment') {
            steps {
                bat '''
                npm cache clean --force
                npm config set registry https://registry.npmjs.org/
                npm config set fetch-timeout 300000
                npm config set fetch-retries 10
                npm config set fetch-retry-factor 10
                npm config set fetch-retry-mintimeout 10000
                npm config set fetch-retry-maxtimeout 60000
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                retry(3) {
                    bat 'npm ci'
                }
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                bat 'npm install --save-dev netlify-cli'
                bat 'npx netlify deploy --prod --auth=%NETLIFY_AUTH_TOKEN% --dir=build --site=d4baa26f-3e97-4e46-80b5-cc71f2214e03'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful on Netlify!'
        }
        failure {
            echo '❌ Deployment failed. Check console output for errors.'
        }
    }
}
