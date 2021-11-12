import React from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts'

export default class radialbar extends React.Component{
  render(){
    const dataPie=[{"name": "Score", "value":this.props.datasRadial}, {"name":"", value:1-this.props.datasRadial}]
    const scoreContent= 100*this.props.datasRadial;

        return(
          
            <div className="radialbarblock" key={'id'}>
            <h2 className="scoretitle">Score</h2>
              <ResponsiveContainer>
                <PieChart 
                width={258} 
                height={263}
                margin={{ top: 50, bottom: 50 }}
                >
                  <Pie
                    data={dataPie}
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
              <div className="scoreobjectiveblock">
                <p className="scorecontent">{scoreContent}%</p>
                <p className="scoreobjective"> de votre objectif</p>
              </div>
            </div>
        )
    }
}