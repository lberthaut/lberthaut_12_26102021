import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Bar} from 'recharts';



export default class Dailyactivities extends React.Component{

  
  render(){
     return(
       <div className="dailyactivitiesblock" key={'userId'}>
          <h2 className="dailyactivitiestitle">Activités quotidienne</h2>
          <ResponsiveContainer>
            <BarChart 
            data={this.props.sessions} 
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
              dx={-10}
              dy={-4}
            />
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
              yAxisId="calories"
              name="Calories brûlées (kCal)"
              dataKey="calories"
              fill="black"
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="poids"
              name="Poids (kg)"
              dataKey="kilogram"
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
