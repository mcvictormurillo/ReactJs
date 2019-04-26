import React from 'react'
class CharacterCard extends React.Component{

    render(){
        return(
        <React.Fragment>
            <div className="card">
                <img src={this.props.character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.character.name}</h5>
                </div>
            </div>
            
        </React.Fragment>
        )
    }
}

export default CharacterCard;