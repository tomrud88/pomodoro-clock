import React, { Component } from 'react'
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInteral';
import Timer from './Timer';

class App extends Component{
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinute: 25,
    isPlay: false,
    session: true
  }

  onIncreaseBreakLength =()=> {
    if(this.state.isPlay === false && this.state.session === false){
    this.setState(prevState => {
     return {
       breakLength: prevState.breakLength + 1,
       timerMinute: prevState.breakLength + 1
     } 
    })
  }else{
    if(this.state.isPlay === false && this.state.session === true){
      this.setState(prevState => {
        return {
          breakLength: prevState.breakLength + 1
          
        } 
       })
    }
  }
  }

  onDecreaseBreakLength =()=> {
    if(this.state.isPlay === false && this.state.session === false){
    this.setState(prevState => {
     return {
       breakLength: prevState.breakLength - 1,
       timerMinute: prevState.breakLength - 1
     } 
    })
  }else{
    if(this.state.isPlay === false && this.state.session === true){
      this.setState(prevState => {
        return {
          breakLength: prevState.breakLength - 1
          
        } 
       })
    }
  }
  }

  onIncreaseSessionLength =()=> {
    if(this.state.isPlay === false && this.state.session === true){
    this.setState(prevState => {
     return {
       sessionLength: prevState.sessionLength + 1,
       timerMinute: prevState.sessionLength + 1
     } 
    })
  }else{
    if(this.state.isPlay === false && this.state.session === false){
      this.setState(prevState => {
        return {
          sessionLength: prevState.sessionLength + 1
          
        } 
       })
    }
  }
  }

  onDecreaseSessionLength =()=> {
  
    if(this.state.isPlay === false && this.state.session === true){   
    this.setState(prevState => {
     return {
       sessionLength: prevState.sessionLength - 1,
       timerMinute: prevState.sessionLength - 1
     } 
    })
  }else{
    if(this.state.isPlay === false && this.state.session === false){
      this.setState(prevState => {
        return {
          sessionLength: prevState.sessionLength - 1   
        } 
       })
      }
    }
  }


  onUpdateTimerMinute=()=>{
    this.setState((prevState)=>{
      return{
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval=(isSession)=>{
    console.log(isSession)
    if(isSession){
      this.setState({
        timerMinute: this.state.sessionLength,
        session: true
      })
    }else {
      this.setState({
        timerMinute: this.state.breakLength,
        session: false
      })
    }
  }

  onResetTimer=()=>{
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
    })
  }

  onPlayStopTimer=(isPlay)=>{
    this.setState({
      isPlay: isPlay
    })
  }

  render(){
    return (
      <main>
       <h2>Pomodoro Clock</h2>
       <section className='interval-length-container'> 
        <BreakInterval 
        isPlay={this.state.isPlay}
        breakInterval={this.state.breakLength} 
        increaseBreak={this.onIncreaseBreakLength} 
        decreaseBreak={this.onDecreaseBreakLength}>
        </BreakInterval>
        <SessionInterval 
        isPlay={this.state.isPlay}
        sessionInterval={this.state.sessionLength} 
        increaseSession={this.onIncreaseSessionLength}
        decreaseSession={this.onDecreaseSessionLength}>
        </SessionInterval>
       </section>
       <Timer 
       timerMinute={this.state.timerMinute} 
       breakLength={this.state.breakLength}
       updateTimerMinute={this.onUpdateTimerMinute}
       toggleInterval={this.onToggleInterval}
       resetTimer={this.onResetTimer}
       onPlayStopTimer={this.onPlayStopTimer}/>
      </main>
    );
  }
  }
  

export default App;
