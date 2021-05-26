import React,{Component}from 'react';

class Timer extends Component{
   state ={
     isSession: true,
     timerSecond: 0,
     intervalId: 0,
     isPlayed:false,
     audioBeep: ''
   }

   

   playStopTimer=()=>{
     if(this.state.isPlayed === false){
         let intervalId = setInterval(this.decreaseTimer,1000)
         this.props.onPlayStopTimer(true);
         this.setState({
             intervalId: intervalId,
             isPlayed: true
         })
         console.log(this.state.intervalId)
     }else{
        clearInterval(this.state.intervalId)
        this.props.onPlayStopTimer(false);
         this.setState({
             intervalId : 0,
             isPlayed: false
         })
     }
    }


   decreaseTimer=()=>{
       switch(this.state.timerSecond) {
           case 0:
               if(this.props.timerMinute === 0){
                   if(this.state.isSession){
                       this.setState({
                           isSession: false
                       })
                       this.props.toggleInterval(this.state.isSession);
                       this.audioBeep.play()
                   }else{
                       this.setState({
                           isSession: true
                       })
                       this.props.toggleInterval(this.state.isSession)
                       this.audioBeep.play()
                    }
                   }else {
               this.props.updateTimerMinute()
               this.setState({
                   timerSecond: 59
               })
            }
               break;
               default:
                   this.setState((prevState) => {
                       return {
                           timerSecond: prevState.timerSecond - 1
                       }
                   })
                   break;
       }
   }

  

  

   resetTimer=()=>{
       //this.stopTimer();
       clearInterval(this.state.intervalId)
       this.props.resetTimer()
       this.props.onPlayStopTimer(false);
       this.setState({
           timerSecond:0,
           isSession:true,
           isPlayed:false
       })
   }

   
   render(){
       return(
           <section>
               <section id='timer-label' className='timer-container' >
                   <h4>{this.state.isSession === true ? 'Session' :
                   'Break'}</h4>
                   <span id='time-left' className='timer'>{this.props.timerMinute}</span>
                   <span className='timer'>:</span>
                   <span className='timer'>{this.state.timerSecond === 0 
                   ? '00' 
                   : this.state.timerSecond <10 
                   ? '0' + this.state.timerSecond 
                   : this.state.timerSecond}
                   </span>
               </section>
               <section className='timer-actions'>
                   <button id='start-stop' onClick={this.playStopTimer}>Play/Stop</button>
                   <button id='reset' onClick={this.resetTimer}>Refresh</button>
                   <audio
          id="beep"
          preload='auto'
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
               </section>
           </section>
       )
   }
}

export default Timer;