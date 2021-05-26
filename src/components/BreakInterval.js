import React from 'react';

function BreakInterval(props){

    function decreaseCounter(){
        if(props.breakInterval === 1){
            return;
        }
        props.decreaseBreak()
    }

    function increaseCounter(){
        if(props.breakInterval === 20){
            return;
        }
        props.increaseBreak()
    }

    return(
        <section>
        <h4 id='break-label'>Break Length</h4>
        <section className='interval-container'>
            <button id='break-decrement' onClick={decreaseCounter}>Down</button>
            <p className='break-length'>{props.breakInterval}</p>
            <button id='break-increment' onClick={increaseCounter}>Up</button>
        </section>
        </section>
    )
}

export default BreakInterval