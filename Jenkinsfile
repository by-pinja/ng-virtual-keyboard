library 'jenkins-ptcs-library@4.0.3'

podTemplate(label: pod.label,
  containers: pod.templates + [
    containerTemplate(name: 'node', image: 'node:12-alpine3.14', ttyEnabled: true, command: '/bin/sh -c', args: 'cat')
  ]
) {
    node(pod.label) {
        stage('Checkout') {
            checkout scm
        }
        container('node') {
            stage('Build') {
                sh """
                    yarn install
                    yarn run build
                """
            }
            stage('Lint') {
                sh """
                    yarn lint
                """
            }
            stage('Publish') {
                if ("${env.TAG_NAME}".contains("-"))
                {
                    publishTagToNpm("./", "--tag beta")
                }
                else {
                    publishTagToNpm()
                }
                
            }
        }
    }
}
