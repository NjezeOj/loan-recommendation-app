import "./chart.css";
import React from 'react';
import {userData} from './dummyData';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

    return <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}/* if width is 400px, height is 100px */>
            <LineChart
                data={userData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {"Active User" && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                <XAxis dataKey="name" stroke="#5550bd" />

                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>;
}


export default Chart;
