import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Bar, Tooltip}  from 'recharts';
import propTypes from 'prop-types';

/**
 * Create a graph of daily sport's activity
 * 
 * @class
 * @this {Dailyactivities}
 * @param {dataKey} datakey of the user
 * @param {this.props.datasActivities} sport's data of the user per day
 */

export default class Dailyactivities extends React.Component{

  
  render(){
     return(
       <div className="dailyactivitiesblock" key={this.props.dataKey}>
          <h2 className="dailyactivitiestitle">Activités quotidienne</h2>
          <ResponsiveContainer height="80%" width="95%">
            <BarChart 
            data={this.props.datasActivities} 
            barGap={8} 
            width={800} 
            height={300}
            >
            <XAxis 
            dataKey="name" 
            stroke="grey" 
            tickLine={false} 
            dy={10}
            />
            <YAxis
            yAxisId="poids"
            domain={['dataMin -2', 'dataMax + 1']}
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={10}
            dy={-4}
            />
            <YAxis
              yAxisId="calories"
              domain={['dataMin -20', 'dataMax + 20']}
              orientation="left"
              axisLine={false}
              tickLine={false}
              hide={true}
              dx={-10}
              dy={-4}
            />
            <Tooltip wrapperStyle={{ width: 130 }} content={<CustomTooltip />} />
            <Legend
              width={'60%'}
              iconType={'circle'}
              iconSize={'.5rem'}
              wrapperStyle={{
                top: '-15%',
                right: '1rem',
                lineHeight: '40px',
              }}
            />
            <CartesianGrid 
            stroke="#ccc" 
            vertical={false}
            />
            <Bar
              yAxisId="poids"
              name="Poids (kg)"
              dataKey="kilogram"
              fill="black"
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
                        <Bar
              yAxisId="calories"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="red"
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
      </ResponsiveContainer>
      </div>
     )
     }
 }   

 /**
 * Create a span, when mouse flyover graph
 * 
 * @function
 * @this {CustomTooltip}
 * @param {payload} The source data of the content to be displayed
 * @param {active} Display the tooltip
 */

 function CustomTooltip({ active, payload }) {
  return active && payload ? (
    <ul className="custom-tooltip">
      <li className="tooltipdatas">{`${payload[0].value}kg`}</li>
      <li className="tooltipdatas">{`${payload[1].value}kCal`}</li>
    </ul>
  ) : null;
}

  /**
 * Check the types of the datas
 * 
 * @Property
 * @this {propTypes}
 */


Dailyactivities.propTypes={
  datasSessionsTime: propTypes.oneOfType([
    propTypes.array,
    propTypes.object,
  ]),
  dataKey:propTypes.number,
};

  CustomTooltip.propTypes={
    active: propTypes.bool,
    payload: propTypes.array,
  };