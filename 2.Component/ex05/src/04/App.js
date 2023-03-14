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
    const now = new Date();
    const [ticks,setTicks] = useState(0);
    const[time,setTime] = useState({
        hours: now.getHours(),
        minites : now.getMinutes(),
        seconds : now.getSeconds()
    });

    //console.log(hours+":"+minites+":"+seconds);
    
     useEffect(()=> {
         setInterval(function(){
            //tick +1
            console.log('time');
         },1000);
     },[])
    return (
        <div>
            <span>{ticks}</span>
            {
                //10초 단위로 Clock UNMOUNT
                //ticks % 10 ===0 ?
                //null :
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={hours}
                minutes={minites}
                seconds={seconds}/>
            }
        </div>
    );
}