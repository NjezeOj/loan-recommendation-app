import * as React from 'react';
import { useState } from 'react';
import { userRows } from './dummyData';
import "./table.css";
import { DataGrid } from '@mui/x-data-grid';


export default function Table() {
    const [data] = useState(userRows)


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
    ];

    return (
        <div className= "tableGrid" style={{ height: 400, width: '94%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
    );
}