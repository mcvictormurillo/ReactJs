import React from 'react';
import confLogo from '../images/badge-header.svg';
import "../styles/Badge.css";
import "../global.css"
import Gravatar from './Gravatar'
//webpack se encarga de empaquetar ese archivo

class Badge extends React.Component{
    //define el resultado en pantalla
    render(){
        
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="" />
            </div>
            <div className="Badge__section-name">
                <Gravatar 
                className="Badge__avatar"
                email={this.props.email}
                />
                <h1> {this.props.firstName} <br />  {this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziConf
            </div>
        </div>
        )
        
    }
}

export default Badge;