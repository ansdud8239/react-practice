ex02 : 번들링 환경(webpack.config.js) 설정하기

1. 설치 패키지
[ex01]$ npm i -D webpack webpack-cli express
2. 번들링 환경(webpack.config.js) 설정
  - entry : 번들링 할 JS 파일의 시작점
  - output : 번들링 된 JS 파일을 어디에 만들어 둘 지 설정
  
3. 스크립팅
  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack"
  }
  
4. 빌드
[ex01]$ npm run build

5. 실행
[ex01]$ npm start
