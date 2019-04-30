import React, { Component } from 'react';


export default class TeamInfo extends Component{
    render(){
        return (
            <section className="team-info">
                <h1>The Chelmsford Chieftains</h1>
                <img src="/assets/team-photo.png" alt=""/>
                <p>
                The Chelmsford Chieftains are an ice hockey team that currently play in the NIHL South Division 2. The team was founded in 1987 in Chelmsford, Essex and have played their home games at the Riverside Ice and Leisure Centre since forming. 
                </p>
                <ul className="team-managers">
                    <li>
                        <h2>Owner</h2>
                        Derek Bartlett
                    </li>
                    <li>
                        <h2>Joe Wilson</h2>
                        Head Coach
                    </li>
                    <li>
                        <h2>Danny Wright</h2>
                        Assistant Coach
                    </li>
                </ul>
            </section>
        )
    }
}