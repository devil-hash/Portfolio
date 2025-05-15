pipeline {
    agent any

    tools {
        nodejs 'Nodejs 20' // Match your configured Node.js installation in Jenkins
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token') // Make sure this matches the correct Jenkins credential ID
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/devil-hash/Portfolio.git', branch: 'main'
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
