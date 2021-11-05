import React, {Fragment} from 'react';
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
import {useFetch} from '../services/api.js';


export default class Userpage extends React.Component {
    render(){
        const urlId=this.props.match.params.id;
        const current= useFetch.data.UserId.find((data)=>data.data.id===urlId);
        const {firstName} = current || [];

        return(
            <Fragment>
                <Hellobanner username={firstName}/><Hellobannerstyle/>
                <Dailyactivities datasActivities={'test'}/><Dailyactivitiesstyle/>
                <Averagesessionstime datasSessionsTime={'test'}/><Averagesessionstimestyle/>
                <Radargraph datasRadar={'test'} firstName={'test'}/><Radargraphstyle/>
                <RadialBar datasRadial={'test'}/><Radialbarstyle/>
                <Nutritionlayout datascalories={'test'} datasproteines={'test'} datasglucides={'test'} dataslipides={'test'}/><Nutritionlayoutstyle/>
            </Fragment>
        )
    }
}