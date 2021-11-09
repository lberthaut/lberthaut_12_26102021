import React from 'react';
import Userpage from '../pages/userpage.js';
import {Route, BrowserRouter} from 'react-router-dom';
import Pageuserstyle from '../styles/pageuserstyle.js';
import Horizontallayout from '../components/UI/horizontallayout.js';
import Verticallayouts from '../components/UI/verticallayouts.js';
import Layoutstyle from '../styles/layoutsstyle.js';

export default class App extends React.Component{
    render(){

        return(
            <BrowserRouter>
                <Horizontallayout/>
                <Verticallayouts/><Layoutstyle/>
                    <Route exact path='/:id' render={(props) => <Userpage {...props}/>}/>
                <Pageuserstyle/>
               
            </BrowserRouter>
        )
    }
}