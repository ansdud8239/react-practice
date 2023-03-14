import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const now = new Date();
    const [ticks,setTicks] = useState(0);
    const[state,setState] = useState({
        hours: (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) < 10 ?
        '0'+ (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()):
        (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) ,
        minites : now.getMinutes() < 10 ? '0'+now.getMinutes():now.getMinutes(),
        seconds : now.getSeconds() < 10 ? '0'+now.getSeconds():now.getSeconds(),
        session : now.getHours() > 12 ? 'pm' : 'am'
    });
    
     useEffect(()=> {
         const intervalID =  setInterval(() => {
            setState({
                hours: (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) < 10 ?
                 '0'+ (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()):
                 (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) ,
                minites : now.getMinutes() < 10 ? '0'+now.getMinutes():now.getMinutes(),
                seconds : now.getSeconds() < 10 ? '0'+now.getSeconds():now.getSeconds(),
                session : now.getHours() > 12 ? 'pm' : 'am'
            })
            setTicks(ticks+1);
        },1000);    
        return () => {
            clearInterval(intervalID);
        }
     },[state])
    return (
        <div>
            {
                //10초 단위로 Clock UNMOUNT
                ticks % 10 === 0 ?
                null :
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={state.hours}
                minutes={state.minites}
                seconds={state.seconds}
                session={state.session}/>
            }
        </div>
    );
}