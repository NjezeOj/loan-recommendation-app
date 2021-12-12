import React from 'react';
import Chart from "./Chart";
import Table from './Table';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Deposits from './Deposits';

const User = () => {
    return <div>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    
                    <Chart />
                    
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
                        <Deposits />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        <Table />
    </div>;
}



export default User;