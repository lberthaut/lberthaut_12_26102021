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
import Usefetch from '../services/api.js';


export default class Userpage extends React.Component {
    constructor(props){
        super(props);
        this.state={user:{
            userInfos:{firstName:null},
            keyData:{calorieCount:null,proteinCount:null, carbohydrateCount:null,lipidCount:null}
        }}
        console.log('test');
    }
    
    componentDidMount(){
        const urlId=this.props.match.params.id;
        Usefetch.getUser(urlId).then(data=>{
            this.setState({user:{
                userInfos:data.userInfos,
                keyData:data.keyData,
            }})
        });
        
    }
    
    render(){

        return(
            <Fragment>
                <Hellobanner username={this.state.user.userInfos.firstName}/><Hellobannerstyle/>
                {/* <Dailyactivities datasActivities={'test'}/><Dailyactivitiesstyle/>
                <Averagesessionstime datasSessionsTime={'test'}/><Averagesessionstimestyle/>
                <Radargraph datasRadar={'test'} firstName={'test'}/><Radargraphstyle/>
                <RadialBar datasRadial={'test'}/><Radialbarstyle/> */}
                <Nutritionlayout keyData={this.state.user.keyData}/><Nutritionlayoutstyle/>
            </Fragment>
        )
    }
}

/* datascalories={this.state.user.keyData.calorieCount} datasproteines={this.state.user.keyData.proteinCount} datasglucides={this.state.user.keyData.carbohydrateCount} dataslipides={this.state.user.keyData.lipidCount} */