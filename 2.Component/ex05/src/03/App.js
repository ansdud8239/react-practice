import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
    }
    render() {
        // 타이머는 콜백
        // 시분초 10이하이면 앞에 0붙이기
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={'11'}
                        minutes={'02'}
                        seconds={'50'}
                        session={'am'}
                    />
            </div>
        );
    }
}