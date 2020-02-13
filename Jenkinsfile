pipeline {
         agent any
                environment {
                   FILEPATH = "E:\\Application\\Test\\"
                }
                stages {
                  stage('Source') {
                     steps {
                       checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url:'https://github.com/saritha1919/Hearti-Health.git']]])
			              }        
                  }
                  /*stage('Build') {
                     steps { 
                        script{
                          bat label: '', script: 'npm install'
                          bat label: '', script: 'npm run ng -- build --prod'
                        }
                     }
                  }*/
                  stage('Archiving Artifacts') { 
                     steps{ 
                       archiveArtifacts 'dist/**' 
                       echo "${env.FILEPATH}"
                     } 
                  } 
                  stage('Deployment'){
			             steps{
                     script{
                        dir("${env.FILEPATH}\\Live"){
                          fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: "dist\\**", targetLocation:"${env.FILEPATH}backup-${env.BUILD_NUMBER})])
                        }
                        fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: "dist\\**", targetLocation: "${env.FILEPATH}Live")])
                        dir("${env.FILEPATH}Config"){
                        fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: "\\**", targetLocation: "${env.FILEPATH}Live\\dist")])
                        }
                      }
			             }
		           }
             }
    /* post {
        success {
            mail to: 'saritha.modiam@pratian.com', from: 'saritha.modiam@pratian.com',cc: 'lavanya.jami@pratian.com',
                subject: "Build: ${env.JOB_NAME} -Success", 
                body: "Dear Team,\nThis is an automated mail to confirm that Release is successfully given for following  \"${env.JOB_NAME}\" build: ${env.BUILD_NUMBER}\n"
        }
    }*/
}
