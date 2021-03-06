import React, { Component } from 'react';
import './sass/App.sass';
import ScreenAndStats from './components/Screen-and-stats'
import Teams from './components/Teams'
import Spinner from './components/Spinner'
import goals from './Goals'

let goalTimes = [];
goals.forEach(goal => {
  let goalTime = goal.time.split(':')
  goalTime = (goalTime[0] * 60) + goalTime[1] * 1
  goalTimes.push(goalTime) 
})


function LoadScreen(props){

  return(
    <div className={"loadScreen-container " + (props.loading ? "loadScreen" : "")}>
        <div className="loadScreenAnimation">
            <img src="/assets/logo.png" alt="" className="logo"/>
            <Spinner/>
        </div>
    </div>
  )
}

class VideoScreen extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      video: '/assets/720p/main-camera-small.mp4',
      player: '',
      goals: '0-0',
      goalScorer: '',
      statsInView: false,
      loading: true,
      vidPlaying: true,
      timeStamp: 0
    }
    
  }

  componentDidMount(){
    this.mounted = true;
    let videoReady = document.getElementById('video');

    let loadScreen = setInterval(() => { 
        if(videoReady.readyState === 4){
            this.setState({
              loading: false
            })  
          clearInterval(loadScreen)
        }
    }, 500)

    setInterval(() => {
      let time = Math.floor(this.state.timeStamp);

      goalTimes.map((goalTime, i) => {
        if(time >= goalTime){
            this.setState({goals: goals[i].score})
          } else if(time < goalTimes[0]) {  
            this.setState({goals: '0-0'})
        }
      })

    }, 1000)

  }

  componentWillUnmount(){
    this.mounted = false;
  }
  timeStamp(time){
    if(this.mounted){
      this.setState({timeStamp: time})
    }
  }



  onChangeVideo(newVideo, newPlayer){
    const videoScreen = document.getElementById('video');

    let timeStamp = this.state.timeStamp;

    //Find out if the button that was clicked is a player
    let buttonPressed = newPlayer.team === "Red" || newPlayer.team === "Yellow"
    //Wait until the swipe animation is covering the video window
    
    setTimeout(() => {
      this.setState({
        video: newVideo,
        player: newPlayer,
        // If the button clicked was a player, it returns true
        statsInView: buttonPressed,
        vidPlaying: false
      }, () => {
        let loadVideo = setInterval(()=> {
          
          console.log("Change ready?: " + videoScreen.readyState)
          if(videoScreen.readyState === 4 && videoScreen.currentTime < videoScreen.duration){
            
            videoScreen.currentTime = timeStamp;
            setTimeout(() => {
                this.setState({
                  vidPlaying: true
                }, () => { 
                  clearInterval(loadVideo)
                })
              

            }, 0)
          }
        }, 100)
      })

    }, 300)




  }
  render(){
    return (
      <>
        <LoadScreen loading={this.state.loading}/>
        <section>
            
          <ScreenAndStats 
              video = {this.state.video}
              player = {this.state.player}
              goals = {this.state.goals}
              goalScorer = {this.state.goalScorer}
              statsInView = {this.state.statsInView}
              videoPlaying = {this.state.vidPlaying}
              timeStamp = {this.timeStamp.bind(this)}
          />
          <Teams 
              onChangeVideo={this.onChangeVideo.bind(this)}
          />
          <section className="footer">
            built by <a href="http://olivermeredith.com" rel="noopener noreferrer" target="_blank"> Oliver Meredith </a>
          </section>
        </section>
        </>
      
    )
  }
}

export default VideoScreen;