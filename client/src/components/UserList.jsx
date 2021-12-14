import * as React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

import Link from '@mui/material/Link';
import "./userList.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function UserList() {
    const [data, setData] = useState([])
    //let userId = localStorage.getItem("token");
    const getUsers = async() => {
        const res = await axios.get('https://elevatei4g.herokuapp.com/api/v1/company/users/61b54467400a9c3639950fec')
        //const res = await axios.get(`https://elevatei4g.herokuapp.com/api/v1/company/users/${localStorage.getItem("token")}`);
        //const res = await axios.get('https://elevatei4g.herokuapp.com/api/v1/company/users/'+userId)
        console.log(localStorage.getItem("token"))
        setData(res.data.data)
    }

    useEffect(() => {
        getUsers();
    }, [])
   
    return (        
        <div>
            <h1 className="userTitle">Users List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right"><Link href={"/user/" + row.monoId}><button className="userListEdit">View Status</button></Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
    
}