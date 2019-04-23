import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import VideoScreen from './VideoScreen';
import * as serviceWorker from './serviceWorker';
import About from './About';
import { Transition, animated } from 'react-spring/renderprops';

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
        <nav>
          <ul>
            <li onClick={this.showAbout.bind(this)}>
              <img src={this.state.showAbout ? 'assets/home-icon.png' : 'assets/info-icon.png'} alt=""/>
            </li>
          </ul>
        </nav>
    
        <main className="container">
          <Transition
            native
            items = {!this.state.showAbout}
            from = {{ opacity: 0, transform: 'translateY(50px)'}}
            enter = {{ opacity: 1, transform: 'translateY(0)'}}
            leave = {{ opacity: 0, transform: 'translateY(50px)'}}
          >
            {show => show && (props => (
              <animated.div style={props}>
                <VideoScreen/>
              </animated.div>
            ))}
          
          </Transition>

          <Transition
            native
            items = {this.state.showAbout}
            from = {{ opacity: 0}}
            enter = {{ opacity: 1}}
            leave = {{ opacity: 0}}
            delay = {this.state.showAbout ? 300 : 0}
          >
            {show => show && (props => (
              <animated.div style={props}>
                  <About/>
              </animated.div>
            ))}
          </Transition>
        </main>

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
