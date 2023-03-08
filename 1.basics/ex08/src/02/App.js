import React from 'react';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
    오류 : 
        <h2>02</h2>
        <p>JSX-Tutorial - 특징1: Single Root</p>
    이유: 여러개의 노드가 있을경우 최상단의 노드를 결정하지 못해 에러발생 . 이럴경우 반드시 바깥에 감싸줘야함
    변환되는 코드
    React.createElement('div',null,React.createElement('h2',null,'01),React.createElement....)
  */
  return (
    <div id='App'>
        <h2>02</h2>
        <p>JSX-Tutorial - 특징2: Single Root</p>
    </div>
  );
}

export default App;
