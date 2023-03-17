1. backend
	1) 테스트(개발 모드)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)
	
	2) 빌드 (배포)
		$ mvn -f kanbanboard/backend exec:exec clean package
			: kanbanboad/backend/target에 jar파일이 생성 -> 원하는 서비스 위치에 이동 후 실행
		테스트
		$ /root/.jenkins/workspace/{프로젝트 명(kanbanboard)}
		$ java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar

2. ssh 연결(ssh key 인증)
 	1) key 생성하기(리눅스 서버)
 		$ ssh-keygen -t rsa -b 2048 -m PEM -C "moonyoung"
 	
 	2) key 생성확인
 		- ~/.ssh/id_rsa 	: private key
 		- ~/.ssh/id_rsa.pub : public key
 	
 	3) 공개키를 서버에 설치하기
 		$ mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
 	
 	4) 연결 테스트
 		$ ssh -i mykey.pem root@192.168.10.109
 		
 	5) jenkins
		- Publish over SSH 플러그인 설치 
		- Publish over SSH 플러그인 ssh server(springboot-publish- server) 등록
		- 프로젝트의 빌드 후 조치(post-build action)의 설정
		
*포트확인 : netstat -anp | grep 포트
*gcc11 
	$ yum install devtoolset-11
	$ scl enable devtoolset-11 bash
	$ g++ --version
	환경설정
	$ vi /etc/profile
	scl enable devtoolset-11 bash 추가
#####################################################################	

2. frontend
	1) 설치
    	- 개발툴
       		$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
     	- react library
       		$ npm i react react-dom prop-types styled-components react-addons-update

	2) 설정
		- webpack.config.js 설정
		- babel.config.json 설정
		
	3) npm 스크립팅
	    "scripts":{
        	"debug":"npx webpack serve --config config/webpack.config.js --progress --mode development --env",
        	"start":"npx webpack serve --config config/webpack.config.js --progress --mode development",
        	"build":"npx webpack --config config/webpack.config.js --mode production"
   		 }

	4) 테스트(개발모드)
		$ npm start 
	5) 빌드(배포)
		$ npm run build
	
