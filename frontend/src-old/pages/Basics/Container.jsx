import Navbar from './Navbar'

//<div className='d-flex flex-column align-items-center'  style={{ gap: '1rem' }}>

const Container = ({ children }) => {
    return (
        <div className='flex-grow-1'>
            <Navbar/>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Container