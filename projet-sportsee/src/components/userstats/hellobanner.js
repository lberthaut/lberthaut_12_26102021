import React from 'react';
import propTypes from 'prop-types';


export default class Hellobanner extends React.Component{
    render(){
        const {username, id}= this.props;
        return(
            <div className="banner" key={id}>
                <div className="titlebanner">
                    <h1>Bonjour</h1>
                    <p className="username">&nbsp;{username}</p>
                </div>
                <p className="bannerdescription">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    }
}

Hellobanner.propTypes={
    username:propTypes.string,
    id: propTypes.number,
}