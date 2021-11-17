import React from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';
import propTypes from 'prop-types';

export default class Radargraph extends React.Component{
    render(){

        return(
            <div className="radargraphblock"  key={this.props.dataKey}>
                <ResponsiveContainer>
                    <RadarChart 
                    outerRadius={90} 
                    data={this.props.datasRadar}
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

Radargraph.propTypes={
    datasSessionsTime: propTypes.oneOfType([
      propTypes.array,
      propTypes.object,
    ]
    ),
    dataKey:propTypes.number,
  }