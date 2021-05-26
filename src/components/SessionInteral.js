import React from 'react';

function SessionInterval(props){

    function increaseCounter(){
        if(props.sessionInterval === 60){
            return;
        }
        props.increaseSession()
    }

    function decreaseCounter(){
        if(props.sessionInterval === 1){
            return;
        }
        props.decreaseSession()
    }

    return(
        <section>
            <h4 id='session-label'>Session Length</h4>
        <section className='interval-container'>
            <button id='session-decrement' onClick={decreaseCounter}>Down</button>
            <p className='session-length'>{props.sessionInterval}</p>
            <button id='session-increment' onClick={increaseCounter}>Up</button>
        </section>
        </section>
    )
}

export default SessionInterval