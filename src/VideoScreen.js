import React, { Component } from 'react';
import './sass/App.sass';
import ScreenAndStats from './components/Screen-and-stats'
import Teams from './components/Teams'
import Spinner from './components/Spinner'



let videoScreen,videoScreenContainer, btns;
let timeStamp;



function setHeight(){
  let vidHeight = videoScreen.offsetHeight;
  videoScreenContainer.style.height = "";
  videoScreenContainer.style.height = vidHeight + "px";
}


window.addEventListener('load', function(){
  videoScreen = document.getElementById('video');
  videoScreenContainer = document.getElementById('video').parentNode;
  btns = document.querySelectorAll('.button');

  btns.forEach((btn, i) => {
    btn.addEventListener('click', function(){
      btns.forEach(e => {
        e.classList.remove('focused')
      })

      btn.classList.add('focused')
    })
  })
  setHeight();

})


function LoadScreen(props){

  console.log(props.loading)
  return(
    <div className={"loadScreen-container " + (props.loading ? "loadScreen" : "")}>
        <div className="loadScreenAnimation">
            <img src="" alt="" className="logo"/>
            <Spinner/>
        </div>
    </div>
  )
}


class VideoScreen extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      video: '/assets/test-videos/Abstract - 20070-1.mp4',
      player: '',
      goals: '0-0',
      goalScorer: '',
      statsInView: false,
      loading: true,
      vidPlaying: true
    }
    
  }

  componentDidMount(){
    let videoReady = document.getElementById('video');

      let loadScreen = setInterval(() => { 
        if(videoReady.readyState === 4){
          console.log("ready")
            this.setState({
              loading: false
            })  
          clearInterval(loadScreen)
        }
  

    })
  }


  onChangeVideo(newVideo, newPlayer){

    timeStamp = videoScreen.currentTime;

    //Find out if the button that was clicked is a player
    let buttonPressed = newPlayer.team === "Red" || newPlayer.team === "Blue"
    //Wait until the swipe animation is covering the video window
    
    setTimeout(() => {
      videoScreen.currentTime = timeStamp;
      this.setState({
        video: newVideo,
        player: newPlayer,
        // If the button clicked was a player, it returns true
        statsInView: buttonPressed,
        vidPlaying: false
      }, () => {
        let loadVideo = setInterval(()=> {

          if(videoScreen.readyState === 4 && videoScreen.currentTime < videoScreen.duration){

            setTimeout(() => {

              this.setState({
                vidPlaying: true
              }, () => { 
                clearInterval(loadVideo)
              })

            }, 400)
          }
        }, 100)
      })

    }, 300)




  }
  render(){
    return (
      <>
        <LoadScreen loading={this.state.loading}/>
        <main className="container">
            
          <ScreenAndStats 
              video = {this.state.video}
              player = {this.state.player}
              goals = {this.state.goals}
              goalScorer = {this.state.goalScorer}
              statsInView = {this.state.statsInView}
              videoPlaying = {this.state.vidPlaying}
          />
          <Teams 
              onChangeVideo={this.onChangeVideo.bind(this)}
          />
        </main>
        </>
      
    )
  }
}

export default VideoScreen;