import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'

import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

const root = createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)