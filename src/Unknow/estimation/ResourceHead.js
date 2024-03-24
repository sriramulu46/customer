import React from 'react'

function Header({ setIsAddingResource }) {
    return (
        <header>
            {/* <h1>Resource</h1> */}
            <div style={{ marginTop: '10px', marginBottom: '14px' }}>
                <button onClick={() => setIsAddingResource(true)} className='round-button'>Customer Estimation</button>
                
            </div>
        </header>

        
    )
}

export default Header

//Header page.js will 