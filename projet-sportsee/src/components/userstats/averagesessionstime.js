import React from 'react';
import { useParams } from 'react-router-dom';
import {LineChart, CartesianGrid, XAxis, Tooltip, Legend} from 'recharts'
import Usefetch from '../../services/api.js'

export default function Averagesessionstime (userId){
    userId= useParams().id
/*     const {datasSessionsTime}= Usefetch('${userId}/average-sessions'); */
    const days= ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    /* function sessions(){
        for(let i=0; i<datasSessionsTime.sessions.length; i++){
            datasSessionsTime.sessions[i].day= days[i];
        }
        return datasSessionsTime.sessions;
    } */

        return(
            <div className="graphsessionstimeblock" key={userId}>
            <div className="graphaveragetime">
                <LineChart width={258} height={263} data={'sessions()'}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" hide="true"/>
                <Tooltip />
                <Legend />
                </LineChart>
            </div>
            <div className="opacityblock"></div>
            </div>
        )
}