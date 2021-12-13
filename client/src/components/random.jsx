import * as React from 'react';
import { useState, useEffect } from 'react';
/* import { userRows } from './dummyData'; */
import "./table.css";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



export default function Table({ identifier }) {
    const [data, setData] = useState()

    /* useEffect(() => {
        setData(userRows);
    }, []) */
    const getTableData = async () => {

        const res = await axios.get(`https://elevatei4g.herokuapp.com/api/v1/user/transactions/${identifier}`);

        setData(res.data.data.data)

    }

    useEffect(() => {

        getTableData();

    }, [])

    const columns = [

        { field: 'amount', headerName: 'Amount', width: 70 },
        { field: 'type', headerName: 'Type', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        {
            field: 'balance',
            headerName: 'Balance',
            type: 'number',
            width: 90,
        }
    ];

    return (
        <div className="tableGrid" style={{ height: 400, width: '94%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}

            />
        </div>
    );
}