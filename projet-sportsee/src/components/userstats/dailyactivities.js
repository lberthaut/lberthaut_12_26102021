import React from 'react';
import { useParams } from 'react-router-dom';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import Usefetch from '../../services/api.js'



export default function Dailyactivities(userId){
  userId=useParams().id;

/*   let {datasActivities}= Usefetch('${userId}/activity'); */

  /* datasActivities.sessions.forEach((date) => {
      let [mm, dd] = date.day.split('-');
      date.name = `${dd}/${mm}`;
    }); */
  

     return(
       <div className="dailyactivitiesblock" key={userId}>
          <h2 className="dailyactivitiestitle">Activités quotidienne</h2>
          <BarChart width={835} height={320} data= {'datasActivities'}>
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
