import React, {Fragment} from 'react';
import Horizontallayout from '../components/UI/horizontallayout.js';
import Verticallayouts from '../components/UI/verticallayouts.js';
import Layoutstyle from '../styles/layoutsstyle.js';
import Hellobanner from '../components/userstats/hellobanner.js';
import Hellobannerstyle from '../styles/hellobannerstyle.js';
import Dailyactivities from '../components/userstats/dailyactivities.js';
import Dailyactivitiesstyle from '../styles/dailiyactivitiesstyle.js';
import Averagesessionstime from '../components/userstats/averagesessionstime.js';
import Averagesessionstimestyle from '../styles/averagesessionstimestyle.js'
import Radargraph from '../components/userstats/radargraph.js';
import Radargraphstyle from '../styles/radargraphstyle.js'
import RadialBar from '../components/userstats/radialbar.js'
import Radialbarstyle from '../styles/radialbarstyle.js'
import Nutritionlayout from '../components/userstats/nutrition.js'
import Nutritionlayoutstyle from '../styles/nutritionlayoutstyle.js';


export default class Userpage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{userInfos:{firstName:""}}
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/user/12').then(result => result.json()).then(data=>this.setState({user: data.data}))
    }
    render(){

        return(
            <Fragment>
                <Horizontallayout/>
                <Verticallayouts/><Layoutstyle/>
                <Hellobanner username={this.state.user.userInfos.firstName}/><Hellobannerstyle/>
                <Dailyactivities/><Dailyactivitiesstyle/>
                <Averagesessionstime/><Averagesessionstimestyle/>
                <Radargraph/><Radargraphstyle/>
                <RadialBar/><Radialbarstyle/>
                <Nutritionlayout/><Nutritionlayoutstyle/>
            </Fragment>
        )
    }
}