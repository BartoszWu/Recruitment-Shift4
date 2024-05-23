import React from 'react'

import './App.css'
import { MoneyInput } from './components/input/MoneyInput.tsx'

function App() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <MoneyInput value={value} onChange={setValue} />
        </>
    )
}

export default App
