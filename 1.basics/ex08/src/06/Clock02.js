import React from 'react';

function Clock02(props) {
    const now = new Date();
    let hours = now.getHours();
    let minites = now.getMinutes();
    let seconds = now.getSeconds();

    ('0'+(hours>12?hours -12 : hours)).slice(-2)
    return (
        <div>
            {('0'+(hours>12?hours -12 : hours)).slice(-2)}
            {':'}
            {('0'+minites).slice(-2)}
            {':'}
            {('0'+seconds).slice(-2)}
            {' '}
            {hours>12?'PM':'AM'}
        </div>
    );
}

export default Clock02;