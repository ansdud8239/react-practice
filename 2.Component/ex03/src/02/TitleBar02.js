import React, { useState } from 'react';

export default function TitelBar02() {
    // 반환은 배열로 하고[] 첫번째 요소: state를 가리키는 이름, 두번째요소 세팅할 수 있는 함수(setter)
    const [no,setNo] = useState(0);
    
    const onClickHandler= function(){
        setNo(no+1);
        console.log(`TitleBar02 Clicked:${no}`);
  } 
    return (
        <div>
            <h1
                onClick={onClickHandler}
                style={{
                    cursor:'pointer'
                }}
            >Function Handler</h1>
            {no}
        </div>
    )
}