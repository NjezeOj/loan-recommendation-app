import React from 'react';
import MonoConnect from '@mono.co/connect.js';

export default function App() {
    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
            onClose: () => console.log('Widget closed'),
            onLoad: () => console.log('Widget loaded successfully'),
            onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
            key: "test_pk_RqyBLsMvlitY9xFEt0Hi"
        })

        monoInstance.setup()

        return monoInstance;
    }, [])

    return (
        <div>
            <button onClick={() => monoConnect.open()}>
                Link account with Mono
            </button>
        </div>
    )
}