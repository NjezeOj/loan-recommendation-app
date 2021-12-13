import React from 'react';
import Chart from "./Chart";
import Table from './Table';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Deposits from './Deposits';
import {useParams} from "react-router-dom";
import axios from 'axios';

const User = () => {
    const params = useParams()
    const [monoId] = useState(params._id)
    
    //const [data, setData] = useState([])


    const getIncome = async () => {

        const res = await axios.get(`https://elevatei4g.herokuapp.com/api/v1/user/income/${monoId}`);

        console.log(res.data.data)

    }

    useEffect(() => {

        getIncome();

    })
    return <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    
                    <Chart identifier="monoId"/>
                    
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            mt:2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 280,
                        }}
                    >
                        <Deposits identifier={monoId}/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        
        <Table identifier={monoId}/>
    </div>;
}



export default User;