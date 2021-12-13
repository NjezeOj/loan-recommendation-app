import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Deposits({identifier}) {
    const [data, setData] = useState([])


    const getIncome = async () => {

        const res = await axios.get(`https://elevatei4g.herokuapp.com/api/v1/user/income/${identifier}`);

        setData(res.data.data)

    }

    useEffect(() => {

        getIncome();

    })
    return (
        <React.Fragment>
            <Title>Average Income</Title>
            <Typography component="p" variant="h4">
                N{data.amount/100}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                Confidence: {data.confidence}
            </Typography>
        </React.Fragment>
    );
}