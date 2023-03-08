import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minites = now.getMinutes();
    const seconds = now.getSeconds();
    const htmls=
        "<span>"+
        ('0'+(hours>12?hours -12 : hours)).slice(-2)+
        ':'+
        ('0'+minites).slice(-2)+
        ':'+
        ('0'+seconds).slice(-2)+
        ' '+
        (hours>12?'PM':'AM')+
        "</span>";
    const o = {
        __html :htmls
    }
    return (
        //HTML태그를 동적으로 생성하여 JSX Element의 특정 속성 dangerouslySetInnerHTML={htmls} 으로 렌더링하는 작업은 금하고 있지만
        // XSS(Cross-Site-Scripting) 보호기능을 끄고 사용할 수 있다.
        <div dangerouslySetInnerHTML={o}/>

    );
}

export default Clock;