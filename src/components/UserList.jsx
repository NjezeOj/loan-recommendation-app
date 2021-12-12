import * as React from 'react';
import { useState } from 'react';
import { userMonoData } from './dummyData';
import { DeleteOutline } from "@material-ui/icons";
import {
    Link
} from "react-router-dom";
import "./userList.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function UserList() {
    const [data, setData] = useState(userMonoData)

   /*  const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    } */

    /* const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                        {/* </Link> 
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.id)} />
                    </>

                )
            }
        },
    ]; */
    return (
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
                            <TableCell align="right"><Link to={"/user/" + row._id}><button className="userListEdit">Edit</button></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
    
}