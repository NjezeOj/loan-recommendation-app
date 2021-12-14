import React from 'react';
import axios from 'axios';
import MonoConnect from '@mono.co/connect.js';
import "./monoconnect.css";


export default function App() {
    async function RegisterUser(code) {
        let companyId = "61b54467400a9c3639950fec"

        await axios.post("https://elevatei4g.herokuapp.com/api/v1/company/AddId", {
            data: {
                code: code,
                id:companyId
            }
        }).then(res => console.log(res.data));
    }

    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
            onClose: () => console.log('Widget closed'),
            onLoad: () => console.log('Widget loaded successfully'),
            onSuccess: ({ code }) => RegisterUser(code),
            key: "live_pk_m5O2NVprhWPcQEkRFzU6"
        })

        monoInstance.setup()

        return monoInstance;
    }, [])

    return (
        <div>
            <h1 className="userTitle">Mono Connect</h1>
            <button className="button" onClick={() => monoConnect.open()}>
                Link account with Mono
            </button>
        </div>
    )
}