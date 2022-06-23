import React from 'react';
import Userpage from '../pages/userpage.js';
import { Route, BrowserRouter } from 'react-router-dom';
import Pageuserstyle from '../styles/pageuserstyle.js';
import Horizontallayout from '../components/UI/horizontallayout.js';
import Verticallayouts from '../components/UI/verticallayouts.js';
import Layoutstyle from '../styles/layoutsstyle.js';


/**
 * Create routes for differents components of the site
 * 
 * @class
 * @this {App}
 * @param {id} id of the user
 * @param {props} props render the page with the user's data
 */

export default class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <Horizontallayout />
                <Verticallayouts /><Layoutstyle />
                <Route exact path='projetsportsee/12' render={(props) => <Userpage {...props} />} />
                <Pageuserstyle />
            </BrowserRouter>
        )
    }
}