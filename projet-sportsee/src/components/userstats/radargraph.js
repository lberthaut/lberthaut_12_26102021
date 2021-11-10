import React from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';

export default class Radargraph extends React.Component{
    render(){

        return(
            <div className="radargraph" key={'id'}>
                <ResponsiveContainer>
                    <RadarChart 
                    outerRadius={90} 
                    data={this.props.data}
                    >
                    <PolarGrid 
                    radialLines={false} 
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        domain={[0, 150]}
                        dy={5}
                        tickLine={false}
                        stroke="white"
                    />
                    <Radar dataKey="value" 
                    name=" " 
                    fill="red" 
                    fillOpacity={0.7}
                    />
                    </RadarChart>
          </ResponsiveContainer>
            </div>
        )
    }
}