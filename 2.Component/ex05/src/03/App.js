import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);

        const now = new Date();
        this.state={
            hours: (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) < 10 ?
            '0'+ (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()):
            (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) ,
            minites : now.getMinutes() < 10 ? '0'+now.getMinutes():now.getMinutes(),
            seconds : now.getSeconds() < 10 ? '0'+now.getSeconds():now.getSeconds(),
            session : now.getHours() > 12 ? 'pm' : 'am'
        }

    }
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={this.state.hours}
                        minutes={this.state.minites}
                        seconds={this.state.seconds}
                        session={this.state.session}
                    />
            </div>
        );
    }
    componentDidMount() {
        console.log('Clock', 'componentWillUnmount');
        
        setInterval(() => {
            const now = new Date();
            this.setState({
                hours: (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) < 10 ?
                 '0'+ (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()):
                 (now.getHours() % 12 ? now.getHours() % 12 : now.getHours()) ,
                minites : now.getMinutes() < 10 ? '0'+now.getMinutes():now.getMinutes(),
                seconds : now.getSeconds() < 10 ? '0'+now.getSeconds():now.getSeconds(),
                session : now.getHours() > 12 ? 'pm' : 'am'
            })
        },1000); 
    }


}