import React from 'react';
import Userpage from '../pages/userpage.js';
import {Route, BrowserRouter} from 'react-router-dom';
import Pageuserstyle from '../styles/pageuserstyle.js';

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" render={(props) => <Userpage {...props}/>}/><Pageuserstyle/>
            </BrowserRouter>
        )
    }
}