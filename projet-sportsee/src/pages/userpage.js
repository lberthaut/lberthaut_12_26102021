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
        this.state={
            user:{
                userInfos:{firstName: null},
                keyData:{calorieCount: null, proteinCount: null, carbohydrateCount: null, lipidCount: null},
                score: null, 
                todayScore: null
            },
            userSessions:{
                sessions:{day: null, sessionLength: null},
            },
            userActivity:{
                sessions:{day: null, kilogram: null, calories: null}
            },
            userPerformance:{
                kind:{1:null, 2:null, 3: null, 4:null, 5:null, 6:null},
                data:{value:null, kind:null}
            }
        }
    }
    
    componentDidMount(){
        const urlId=this.props.match.params.id;
        Usefetch.getUser(urlId).then(data=>{
            this.setState({user:{
                userInfos:data.userInfos,
                keyData:data.keyData,
                score:data.score,
                todayScore:data.todayScore
            }})
        });
        Usefetch.getUserAverageSessions(urlId).then(data=>{
            this.setState({userSessions:{
                sessions:data.sessions
            }})
        });
        Usefetch.getUserActivity(urlId).then(data=>{
            this.setState({userActivity:{
                sessions:data.sessions
            }})
        });
        Usefetch.getUserPerformance(urlId).then(data=>{
            this.setState({userPerformance:{
                kind:data.kind,
                data:data.data
            }})
        });
    }
    
    render(){

        return(
            <Fragment>
                <Hellobanner username={this.state.user.userInfos.firstName}/><Hellobannerstyle/>
                <Dailyactivities datasActivities={this.state.userActivity.sessions}/><Dailyactivitiesstyle/>
                <Averagesessionstime datasSessionsTime={this.state.userSessions.sessions}/><Averagesessionstimestyle/>
                <Radargraph datasRadar={this.state.userPerformance.kind} name={this.state.user.userInfos.firstName}/><Radargraphstyle/>
                <RadialBar datasRadial={this.state.user.score}/><Radialbarstyle/>
                <Nutritionlayout keyData={this.state.user.keyData}/><Nutritionlayoutstyle/>
            </Fragment>
        )
    }
}