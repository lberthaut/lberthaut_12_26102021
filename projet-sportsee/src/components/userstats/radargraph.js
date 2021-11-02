import React from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from 'recharts';

export default class Radargraph extends React.Component{
    render(){
        const {datasRadar, firstName}= this.props;

        return(
            <div className="radargraph">
                <RadarChart outerRadius={90} width={258} height={263} data={datasRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name={firstName} dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                <Legend />
                </RadarChart>
            </div>
        )
    }
}