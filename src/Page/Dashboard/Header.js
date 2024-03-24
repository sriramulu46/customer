import React from 'react'

function Header({ setIsAdding, setIsAddingResource }) {

    
    return (
        <header style={{ backgroundColor: '#f0f0f0' }}>
            <h1 style={{ textAlign: 'center' , color: 'Green' }} >Customer Management</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add FTE</button>
                {/* <button onClick={() => setIsAddingResource(true)} className='round-button'>Customer Estimation</button> */}
                
            </div>
        </header>
    )
}

export default Header