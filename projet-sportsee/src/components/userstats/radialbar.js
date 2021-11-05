import React from 'react';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts'

export default class radialbar extends React.Component{
    render(){
        const {datasRadial, id}= this.props;
        return(
            <div className="radialbarblock" key={id}>
                <RadialBarChart 
                width={160} 
                height={160} 
                innerRadius="10%" 
                outerRadius="80%" 
                data={datasRadial} 
                startAngle={360} 
                endAngle={0}
                >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
                </RadialBarChart>
            </div>
        )
    }
}