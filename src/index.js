import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.scss';
import VideoScreen from './VideoScreen';
import * as serviceWorker from './serviceWorker';

function AppRouter() {
    return (
      <Router>
        
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About/">About</Link>
              </li>
              <li>
                <Link to="/TeamInfo/">Team Info</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/" component={VideoScreen} exact/>
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    );
  }

function About(){
    return(
        <div className="about">
            <h1>About!</h1>
        </div>
    )
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
