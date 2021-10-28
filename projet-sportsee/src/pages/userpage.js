import React, {Fragment} from 'react';
import Horizontallayout from '../components/UI/horizontallayout.js';
import Verticallayouts from '../components/UI/verticallayouts.js';

export default class Userpage extends React.Component {
    render(){
        return(
            <Fragment>
                <Horizontallayout/>
                <Verticallayouts/>
            </Fragment>
        )
    }
}