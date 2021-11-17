import React from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar} from 'recharts';
import propTypes from 'prop-types';

/**
 * Create a graph sport's kind of the user
 * 
 * @class
 * @this {Radargraph}
 * @param {dataKey} datakey of the user
 * @param {this.props.datasRadar} sport's data of the user splited to different kinds
 */

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

  /**
 * Check the types of the datas
 * 
 * @Property
 * @this {propTypes}
 */


Radargraph.propTypes={
    datasSessionsTime: propTypes.oneOfType([
      propTypes.array,
      propTypes.object,
    ]
    ),
    dataKey:propTypes.number,
  }