import React from 'react';
import Userpage from '../pages/userpage.js';
import {Route, BrowerRouter} from 'react-router-dom';

export default class App extends React.Component{
    render(){
        return(
            <BrowerRouter>
                <Route exact path="/" component={Userpage}/>
            </BrowerRouter>
        )
    }
}