import React from 'react';

function Clock(props) {
    const now = new Date();
    let hours = now.getHours();
    let minites = now.getMinutes();
    let seconds = now.getSeconds();
    return (
        /*
            comment01: JSX밖은 javascript 구문(주석구문)이 가능하다
        */
        <div 
        /*
            comment02: 여기서도 주석이 가능하다 : 비추
        */
        className='clock' title='시계'>
        {/*
            comment03: 이런방식으로 표현식이 실행되는 블록안에서 주석을 달아야한다 : 강추
        */}
         {/*
            comment03: JSX는 HTML이 아니다!! 
            <!-- --> HTML주석은 사용할 수 없다.
        */}
            {('0'+(hours>12?hours -12 : hours)).slice(-2)}
            {':'}
            {('0'+minites).slice(-2)}
            {':'}
            // comment05: JSX안에서 Jacascript 주석구문을 사용하면 화면에 그대로 나온다.
            {('0'+seconds).slice(-2)}
            {' '}
            {hours>12?'PM':'AM'}
        </div>
    );
}

export default Clock;