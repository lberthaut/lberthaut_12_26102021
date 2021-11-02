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
    render(){
        return(
            <Fragment>
                <Horizontallayout/>
                <Verticallayouts/><Layoutstyle/>
                <Hellobanner/><Hellobannerstyle/>
                <Dailyactivities/><Dailyactivitiesstyle/>
                <Averagesessionstime/><Averagesessionstimestyle/>
                <Radargraph/><Radargraphstyle/>
                <RadialBar/><Radialbarstyle/>
                <Nutritionlayout/><Nutritionlayoutstyle/>
            </Fragment>
        )
    }
}