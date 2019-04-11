import React, { Component } from 'react';
import { Spring  } from 'react-spring';

import {useSpring, animated} from 'react-spring'
import Spinner from './Spinner';

function GameStats(props){
  const spring = useSpring({marginLeft: 0, opacity: 1, from: {marginLeft: -200, opacity: 0}})
  return( 
    <div className={"stats " + (props.statsInView ? 'open' : '')} >
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
          <animated.h2 style={spring}>{props.visible}</animated.h2>
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
        </div>
    </div>
  )
}

  

      
        
      

// }


  
class VidScreen extends Component{


  render(){
    return (
      
      <section className={"screen "}>
        <div className={"swipe-animation " + (!this.props.loading ? "swipe" : "")}>
          <Spinner/>
        </div>
        <video controls autoPlay muted src={this.props.video} id="video"></video>
      </section>
    )
  }

}

export default class ScreenAndStats extends Component{

    render(){
      return (
        <section className="screen-and-stats">

              <GameStats player={this.props.player} goals={this.props.goals} statsInView={this.props.statsInView} />
              <VidScreen video={this.props.video} visible={this.props.statsVisible} loading={this.props.videoPlaying}/>
                            
            
            
        </section>
      )
    }
  }
