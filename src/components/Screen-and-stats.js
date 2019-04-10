import React, { Component } from 'react';
// import { Player } from 'video-react'

function Stats(props){
  
      return(
        <ul>
          <li>
            {props.player.name}
          </li>
          <li>
            {props.player.position}
          </li>
          <li>
            {props.player.number}
          </li>
        </ul>
      )

}

function VidScreen(props){
  
  return (
      
      <video controls autoPlay muted src={props.video} id="video"></video>
  )
}

export default class ScreenAndStats extends Component{

    render(){
      return (
        <section className="screen-and-stats">
            <div className="game-stats">
              <h1>Current Score</h1>
              <p>
                {this.props.goals}
              </p>
              <p>
                {this.props.goalScorer}
              </p>
            </div>
            <div className="screen">
                <VidScreen video={this.props.video}/>
                
            </div>
            <div className="player-stats">
              <h1>Player Stats</h1>
              <Stats player={this.props.player}/>
            </div>
            
        </section>
      )
    }
  }
