import React from 'react';

function Clock01(props) {
    const now = new Date();
    let hours = now.getHours();
    let minites = now.getMinutes();
    let seconds = now.getSeconds();
    let session = 'AM';

    if(seconds<10){
        seconds = '0'+seconds;
    }

    if(minites<10){
        minites = '0'+minites;
    }
    if(hours>12){
        session = 'PM';
    }

    if(hours<10){
        hours = '0'+hours;
    }
    return (
        <div>
            {hours}:{minites}:{seconds} {session}
        </div>
    );
}

export default Clock01;