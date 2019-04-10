import React, { Component } from 'react';
import './sass/App.sass';
import ScreenAndStats from './components/Screen-and-stats'
import Teams from './components/Teams'
import Players from './Players';
import players from './Players';



let videoScreen = '';
let timeStamp;
let scoreKeepIndex = 0;
let goalTimes = [];


window.addEventListener('load', function(){
  videoScreen = document.getElementById('video');
  setHeight();
})

function setHeight(){
  let vidHeight = videoScreen.offsetHeight;
  videoScreen.parentNode.style.height = "";
  videoScreen.parentNode.style.height = vidHeight + "px";
}

// window.onresize = setHeight;
export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      video: '/assets/test-videos/Abstract - 20070-1.mp4',
      player: '',
      goals: '0-0',
      goalScorer: ''
    }
  }

  onChangeVideo(newVideo, newPlayer){
    timeStamp = videoScreen.currentTime;

    this.setState({
      video: newVideo,
      player: newPlayer
    }, () => {
      videoScreen.currentTime = timeStamp;
    })


  }

  componentDidMount(){
    
    
    const goalScorers = Players.filter(player => player.goals);
    
    //Return goalTines Array with each time a goal is scored from Players.js
    //  Players.map((player) => player.goalData.goalTimes.map(time => goalTimes.push(time)))

    Players.map(player => {
      if(player.goals){
        player.goalData.goalTimes.map(time => {
          goalTimes.push(time)
        })
      } 
    })
    console.log(goalScorers)
    console.log(goalTimes)


      // goalScorer: goalScorers[0].name + " " + goalScorers[0].goalData.goalTimes[0]
      
      console.log(goalTimes.length)

      this.interval = setInterval(() => {
        timeStamp = videoScreen.currentTime
        // console.log("scored" + ' ' + timeStamp + ' ' + scoreKeepIndex + ' ' + goalTimes[scoreKeepIndex]);

          if(!videoScreen.paused ){
    
              if(Math.floor(timeStamp) > goalTimes[scoreKeepIndex]){
                scoreKeepIndex += 1;
                console.log(goalScorers[scoreKeepIndex])
              }
            
          }
        

      }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render(){
    return (
      <main className="container">
          
        <ScreenAndStats 
            video = {this.state.video}
            player = {this.state.player}
            goals = {this.state.goals}
            goalScorer = {this.state.goalScorer}
        />
        <Teams 
            onChangeVideo={this.onChangeVideo.bind(this)}
        />
      </main>
    )
  }
}

// export default App;
