pipeline {
         agent any
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
                                bat label: '', script: 'npm run ng -- build'
                              }
                            }
                  }*/
               stage('Archiving Artifacts') { 
                         steps{ 
                             archiveArtifacts 'dist/**' 
                         } 
                 } 
                  stage('Deployment'){
			             steps{
                     script{
                       //bat label: '', script: 'npm run ng serve'
                       fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: "dist\\**", targetLocation: "E:\\Application\\Test\\Live")])
                       dir('E:\\Application\\Test\\Config'){
                       fileOperations([fileCopyOperation(excludes: '', flattenFiles: false, includes: "\\**", targetLocation: "E:\\Application\\Test\\Live\\dist")])
                       }
                     }
			             }
		           }
               stage('RestartApp')
               {
                 steps{
                   script{
                     bat "RestartWebsite.bat"
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
