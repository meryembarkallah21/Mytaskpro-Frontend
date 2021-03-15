pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                echo 'test'
                sh 'npm --version'
            }
        }
    }
}

