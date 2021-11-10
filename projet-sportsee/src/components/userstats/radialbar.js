import React from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'

export default class radialbar extends React.Component{
    render(){

        return(
            <div className="radialbarblock" key={'id'}>
              <ResponsiveContainer>
                <PieChart 
                width={730} 
                height={250}
                >
                  <Pie
                    data={this.props.datasRadial}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    fill="transparent"
                    stroke="transparent"
                    animationDuration={700}
                  >
                    <Cell 
                    fill="red" 
                    cornerRadius={50}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
        )
    }
}