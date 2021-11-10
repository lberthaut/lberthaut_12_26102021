import React from 'react';
import {LineChart, ResponsiveContainer, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend} from 'recharts'


export default class Averagesessionstime extends React.Component{
    
    render(){
        return(
            <div className="graphsessionstimeblock" key={'userId'}>
            <div className="graphaveragetime">
            <ResponsiveContainer>
                <LineChart 
                width={730} 
                height={250} 
                data={this.props.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid 
                strokeDasharray="3 3" 
                />
                <XAxis 
                dataKey="day" 
                />
                <YAxis 
                dataKey="sessionLength"
                />
                <Tooltip />
                <Legend />
                <Line 
                type="monotone" 
                dataKey="sessionLength" 
                stroke="#8884d8" 
                />
                </LineChart>

                {/* <LineChart
                margin={{ top: 0, right: 20, left: 20, bottom: 20 }}
                data={this.props.sessions}
                >
                <XAxis
                    dataKey="day"
                    stroke="rgba(255, 255, 255, 0.6)"
                    tickLine={false}
                    dy={10}
                />
                <YAxis
                    dataKey="sessionLength"
                    stroke="rgba(255, 255, 255, 0.6)"
                    hide={true}
                    domain={[0, 'dataMax + 75']}
                />
                <Line
                    dataKey="sessionLength"
                    type="monotone"
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                    stroke: 'rgba(255,255,255, 0.6)',
                    strokeWidth: 10,
                    r: 5,
                    }}
                />
                </LineChart> */}
            </ResponsiveContainer>
            </div>
            <div className="opacityblock"></div>
            </div>
        )
}}
