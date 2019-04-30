import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';
import VideoScreen from './VideoScreen';
import * as serviceWorker from './serviceWorker';
import About from './About';
import TeamInfo from './TeamInfo';
// import { Transition, animated } from 'react-spring/renderprops';
import { AnimatedSwitch } from 'react-router-transition';


window.addEventListener('load', () => {

  const btns = document.querySelectorAll('.button')
  
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => btn.classList.remove('focused'))
      btn.classList.add('focused')
      console.log(btn)
    })
  })

})

class AppRouter extends Component{

  constructor(props){
    super(props)
    this.state = {
      showAbout: false
    }
  }

  showAbout(){
    this.setState({showAbout: !this.state.showAbout})
  }

  
  render(){
    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/teamInfo/">Team Info</Link>
                </li>
              </ul>
            </nav>
            
            <AnimatedSwitch
              atEnter={{ opacity: 0}}
              atLeave={{ opacity: 0}}
              atActive={{ opacity: 1}}
              className="container"
            >
              <Route path="/" exact component={VideoScreen} />
              <Route path="/about/" exact component={About} />            
              <Route path="/teamInfo/" exact component={TeamInfo} />
            </AnimatedSwitch>
          </div>
      </Router>

      </>
    
    );

  }
  }



class App extends Component{
    render(){
        return(
            <>
            <AppRouter/>
            </>
        )
    
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
