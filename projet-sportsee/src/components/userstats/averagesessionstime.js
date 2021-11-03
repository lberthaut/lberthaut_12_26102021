import React from 'react';
import {LineChart, CartesianGrid, XAxis, Tooltip, Legend} from 'recharts'

export default class Averagesessionstime extends React.Component{
    render(){
        const {datasSessionsTime}= this.props;
        return(
            <div className="graphsessionstimeblock">
            <div className="graphaveragetime">
                <LineChart width={258} height={263} data={datasSessionsTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" hide="true"/>
                <Tooltip />
                <Legend />
                </LineChart>
            </div>
            <div className="opacityblock"></div>
            </div>
        )
    }
}