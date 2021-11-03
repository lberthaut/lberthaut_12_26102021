import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';



export default class Dailyactivities extends React.Component{
 render(){
    const {datasActivities}= this.props;
     return(
       <div className="dailyactivitiesblock">
          <h2 className="dailyactivitiestitle">Activités quotidienne</h2>
          <BarChart width={835} height={320} data= {datasActivities}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="kilogram" hide="true"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Poids (kg)" fill="#282D30" />
            <Bar dataKey="Calories (kCal)" fill="#E60000" />
        </BarChart>
      </div>
     )
 }   
}