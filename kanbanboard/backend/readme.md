1. backend
	1) 테스트(개발 모드)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)
	
	2) 빌드 (배포)
		$ mvn -f kanbanboad/backend exec:exec clean package
			: kanbanboad/backend/target에 jar파일이 생성 -> 원하는 서비스 위치에 이동 후 실행
		테스트
		$ java -Dspring.profileㄴ.active=production -jar kanbanboard/backend/target/kanbanboard.jar


*포트확인 : netstat -anp | grep 포트
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
	
