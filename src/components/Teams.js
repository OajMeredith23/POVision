import React, { Component } from 'react';
import Players from '../Players';

function PlayerButton(props){
    return(
        <button className="button" onClick={props.onClick}>
            {props.number}
        </button>

    )
}


class Teams extends Component {

    constructor(props){
        super(props);
        this.state = {
            mainCamera: Players.filter(player => player.team === 'None'),
            redTeam: Players.filter(player => player.team === 'Red'),
            blueTeam: Players.filter(player => player.team === 'Blue')
        }
    }
    
    onChangeVideo(){
        this.props.onChangeVideo(this.state.video);
    }
    renderButton(i, num, video, playerInfo){
        return (
            <PlayerButton key={i} number={num}  onClick={() => this.props.onChangeVideo(video, playerInfo)}/>
        )
    }


    render(){
       return ( 
            <section className="teams">
                <div className="button-container blue-team">
                    <div className="team">
                        {this.state.blueTeam.map((player, i) => {
                            return (
                                this.renderButton(i, player.number, player.video, player)
                                )
                            
                        })}
                    </div>
                </div>
                <div className="button-container main-camera">
                    {this.state.mainCamera.map((player, i) => {
                        return (
                            this.renderButton(i, player.name, player.video, player)
                        )
                    })}
                </div>
                <div className="button-container red-team">
                    <div className="team">
                    {this.state.redTeam.map((player, i) => {
                        return (
                            this.renderButton(i, player.number, player.video, player)
                        )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Teams;