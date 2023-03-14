import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    // <Clock
    // message={'ex05: useEffect Hook example'}
    // hours={state.hours}
    // minutes={state.minutes}
    // seconds={state.seconds}/>

    // 초마다 tick이 +1
    // 10초마다 clock이 없어짐
    const [ticks,setTicks] = useState(0);

    // useEffect(()=> {
    //     setInterval(function(){
    //         //tick +1
    //     },1000);
    // },[])
    return (
        <div>
            <span>{ticks}</span>
            {
                //10초 단위로 Clock UNMOUNT
                ticks % 10 ===0 ?
                null :
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={'10'}
                minutes={'20'}
                seconds={'05'}/>
            }
        </div>
    );
}