import React from 'react';
import propTypes from 'prop-types';

/**
 * Create an error message
 * 
 * @class
 * @this {Error}
 * @param {dataKey} datakey of the user
 */

export default class Error extends React.Component {



  render() {

    return (
      <div className="errorblock" key={this.props.key}>
        <p className="errortitle">Oups...</p>
        <p className="errortext">Les informations que vous cherchez ne sont pas accessible. Veuillez réessayer ultérieurement</p>
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


Error.propTypes = {
  key: propTypes.string,
}