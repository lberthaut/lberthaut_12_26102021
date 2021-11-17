import React from 'react';
import {LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip} from 'recharts';
import propTypes from 'prop-types';


export default class Averagesessionstime extends React.Component{

    render(){
        return(
            <div className="graphsessionstimeblock" key={this.props.dataKey}>
                <div className="graphaveragetime">
                <ResponsiveContainer>
                    <LineChart 
                    width={258} 
                    height={263} 
                    data={this.props.datasSessionsTime}
                    margin={{ top: 100, bottom: 50 }}
                    >
                    <XAxis 
                    dataKey="day" 
                    stroke="rgba(255, 255, 255, 0.6)"
                    tickLine={false}
                    dy={10}
                    tick={false}
                    hide={true}
                    />
                    <YAxis 
                    dataKey="sessionLength"
                    hide={true}
                    />
                    <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
                    />
                    <Line 
                    type="natural" 
                    dataKey="sessionLength" 
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                    />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="days"><p>L</p><p>M</p><p>M</p><p>J</p><p>V</p><p>S</p><p>D</p></div>
                <p className="titlegraph">Durée moyenne des sessions</p>
            </div>
        )
}}


function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <span className="tooltipaveragesession">{`${payload[0].value} min`}</span>
      );
    }
    return null;
  }

  
Averagesessionstime.propTypes={
  datasSessionsTime: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]
  ),
  dataKey:propTypes.number,
}


  CustomTooltip.propTypes={
    active: propTypes.bool,
    payload: propTypes.array,
  };