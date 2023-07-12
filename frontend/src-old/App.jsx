import {  RouterProvider } from 'react-router-dom'
import { router } from './router'

const App = () => {
    return (
        <div className='d-flex' style={{ width: '100%', height: '100vh' }}>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App