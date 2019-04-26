import React, { Component } from 'react';
import Spinner from './Spinner';

import { Transition } from "react-transition-group";
import { animateIn } from "./Animations";

function GameStats(props){
  
  
    return( 
      <div className={"stats " + (props.statsInView ? 'open' : '')} style={{marginRight: '10px solid red'}} >
          <div className="game-stats">
            <h1>Current Score</h1>
            <p>
              {props.goals}
            </p>
            <p>
              {props.goalScorer}
            </p>
          </div>
  
          <div className="player-stats">
            <h1>Player Stats</h1>
            <Transition key={props.player.name} timeout={300} in appear onEnter={animateIn}>
              <ul>
                <li>
                  <img src={props.player.image} alt=""/>
                </li>
                <li style={{borderRight: (props.player.team === 'Blue' ? '4px solid yellow' : '4px solid red')}}>
                  <h2>Name</h2>
                  {props.player.name}
                </li>
                <li>
                  <h2>Games Played</h2>
                  {props.player.gamesPlayed}
                </li>
                <li>
                  <h2>Career Goals</h2>
                  {props.player.goalsScored}
                </li>
                <li>
                  <h2>Career Assists</h2>
                  {props.player.assists}
                </li>
                <div className="accent" ></div>
              </ul>
            </Transition>
          </div>
      </div>
    )
  
}

  

    


  
class VidScreen extends Component{

  constructor(props){
    super(props)
    this.state = {
      height: ''
    }
  }
  
  componentDidMount(){
    var video = document.querySelector('video');
    
      setInterval(() => {
        this.props.timeStamp(video.currentTime)
      }, 500)
      
  }

  
  render(){
    let video = this.props.video
    return (
      
      <section className="screen" style={{height: this.state.height}}>
        <div className={"swipe-animation " + (!this.props.vidPlaying ? "swipe" : "")}>
        {!this.props.playing ? <Spinner/> : ''}
        </div>
        
        <video controls autoPlay muted src={video} id="video"></video>
      </section>
    )
  }

}

export default class ScreenAndStats extends Component{

    render(){
      return (
        <section className="screen-and-stats">

              <GameStats player={this.props.player} goals={this.props.goals} statsInView={this.props.statsInView} />
              <VidScreen video={this.props.video} visible={this.props.statsVisible} vidPlaying={this.props.videoPlaying} timeStamp={this.props.timeStamp}/>
                            
            
            
        </section>
      )
    }
  }
