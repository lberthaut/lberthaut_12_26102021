import React from 'react';
import {LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip} from 'recharts';
import propTypes from 'prop-types';


/**
 * Create a graph of Average session time of sport
 * 
 * @class
 * @this {Averagesessionstime}
 * @param {dataKey} datakey of the user
 * @param {this.props.datasSessionsTime} sport's data of the user per session of sport
 */

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

/**
 * Create a span, when mouse flyover graph
 * 
 * @function
 * @this {CustomTooltip}
 * @param {payload} The source data of the content to be displayed
 * @param {active} Display the tooltip
 */

function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <span className="tooltipaveragesession">{`${payload[0].value} min`}</span>
      );
    }
    return null;
  }

  /**
 * Check the types of the datas
 * 
 * @Property
 * @this {propTypes}
 */

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