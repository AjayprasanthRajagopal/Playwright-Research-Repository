pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npm install --global cross-env
          npm install
          npx playwright install
        '''
      }
    }
    stage('Install Chrome') {
        when { expression { params.Browsers.contains('Chrome') } }
        steps { sh 'npx playwright install chrome' }
    }
    stage('Install Edge') {
        when { expression { params.Browsers.contains('Edge') } }
        steps { sh 'npx playwright install msedge' }
    }
    stage('Running tests in headless browser') {
        when {
            expression { !params.Headed }
        }
        steps {    
            echo "Running tests in headless..."
            script {
                def projects = "${params.Browsers}".replace(',', ' ')
                echo "browsers to be run in...${projects}"
                sh "cross-env ENV=${params.Environment} SUITE=${params.Suite} npx playwright test --project ${projects} --retries=0"
            }
        }
    }
      post {
        always {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}