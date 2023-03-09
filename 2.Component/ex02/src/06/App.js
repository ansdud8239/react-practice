import React from 'react';
import './assets/scss/App.scss';
import styled from 'styled-components';
import Content from './Content';

const StyledH1 = styled.h1`
    width:180px;
    text-align: center;
    margin: 100px auto;
    padding: 20px 20px 20px 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color:#cdc1ce;
`;

const StyleDiv = styled.div`
    text-align: center;
`;
// const Content = styled.p`
//     color: #f00;
//     font-size:20px;
//     font-weight:bold;
// `;
function App(props) {
    return (
        <StyleDiv id='App'>
            <StyledH1>CSS in JS</StyledH1>
            <Content>Styled Component 연습</Content>
        </StyleDiv>
    );
}

export default App;