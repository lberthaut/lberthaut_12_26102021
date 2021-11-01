import React from 'react';


export default class Hellobanner extends React.Component{
    render(){
        const {username}= this.props;
        return(
            <div className="banner">
                <div className="titlebanner">
                    <h1>Bonjour</h1>
                    <p className="username">{username}</p>
                </div>
                <p className="bannerdescription">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    }
}