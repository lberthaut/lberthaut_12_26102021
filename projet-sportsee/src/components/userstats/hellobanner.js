import React from 'react';
import propTypes from 'prop-types';

/**
 * Create a banner with the name of the user
 * 
 * @class
 * @this {Hellobanner}
 * @param {id} datakey of the user
 * @param {username} name of the user
 */

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

  /**
 * Check the types of the datas
 * 
 * @Property
 * @this {propTypes}
 */


Hellobanner.propTypes={
    username:propTypes.string,
    id: propTypes.number,
}