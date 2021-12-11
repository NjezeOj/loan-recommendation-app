import * as React from 'react';
import { useState } from 'react';
import { userRows } from './dummyData';
import { DeleteOutline } from "@material-ui/icons";
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';


export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
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
                        {/* <Link to={"/user/" + params.row.id}> */}
                        <button className="userListEdit">Edit</button>
                        {/* </Link> */}
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.id)} />
                    </>

                )
            }
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
    );
}