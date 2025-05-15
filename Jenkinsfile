pipeline {
    agent any

    tools {
        nodejs 'Nodejs 20' // Match the Node.js tool name in Jenkins
    }

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-tokken') // Use the Credential ID you set
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/devil-hash/Portfolio.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                sh 'npm install -g netlify-cli'
                sh 'netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=d4baa26f-3e97-4e46-80b5-cc71f2214e03'
            }
        }
    }
}
