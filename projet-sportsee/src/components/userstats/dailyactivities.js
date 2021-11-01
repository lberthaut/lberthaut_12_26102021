import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';



export default class Dailyactivities extends React.Component{
 render(){
    const {datasactivities}= this.props;
     return(
       <div className="dailyactivitiesblock">
          <h2 className="dailyactivitiestitle">activités quotidienne</h2>
          <BarChart width={730} height={250} data= {datasactivities}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </div>
     )
 }   
}