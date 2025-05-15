pipeline {
    agent any

    tools {
        nodejs 'Nodejs 20' // Your configured Node.js version in Jenkins
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-tokken') // Correct Jenkins credential ID
    }

    options {
        // Clean workspace before starting build to avoid permission issues
        wipeWorkspace()
        // Timeout for the whole pipeline (optional, adjust as needed)
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/devil-hash/Portfolio.git', branch: 'main'
            }
        }

        stage('Prepare Environment') {
            steps {
                // Clean npm cache and increase npm timeout/retries to avoid EIDLETIMEOUT issues
                bat '''
                npm cache clean --force
                npm config set fetch-timeout 120000
                npm config set fetch-retries 5
                npm config set fetch-retry-factor 10
                npm config set fetch-retry-mintimeout 10000
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                bat 'npm install -g netlify-cli'
                bat 'npx netlify deploy --prod --dir=build --auth=%NETLIFY_AUTH_TOKEN% --site=d4baa26f-3e97-4e46-80b5-cc71f2214e03'
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
