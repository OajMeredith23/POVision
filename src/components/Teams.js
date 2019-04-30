import React, { Component } from 'react';
import Players from '../Players';

class PlayerButton extends Component{
    render(){
        const bgStyle = {
            backgroundImage: `url(${this.props.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: (this.props.number !== 'Main Camera' ? '150%' : '50%'),
            backgroundPosition: (this.props.number !== 'Main Camera' ? '50% 30%' : '50% 50%'),
        }

        return(
            <button className="button" onClick={this.props.onClick} style={bgStyle}></button>
        )

    }
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
    renderButton(i, num, video, img, playerInfo){
        return (
            <PlayerButton key={i} number={num} image={img}  onClick={() => this.props.onChangeVideo(video, playerInfo)}/>
        )
    }


    render(){
       return ( 
            <section className="teams">
                <div className="button-container blue-team">
                    <div className="team">
                        {this.state.blueTeam.map((player, i) => {
                            return (
                                this.renderButton(i, player.number, player.video, player.image, player)
                                )
                            
                        })}
                    </div>
                </div>
                <div className="button-container main-camera">
                    {this.state.mainCamera.map((player, i) => {
                        return (
                            this.renderButton(i, player.name, player.video, player.image, player)
                        )
                    })}
                </div>
                <div className="button-container red-team">
                    <div className="team">
                    {this.state.redTeam.map((player, i) => {
                        return (
                            this.renderButton(i, player.number, player.video, player.image, player)
                        )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Teams;