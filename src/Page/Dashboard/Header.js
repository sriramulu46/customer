import React from 'react';

function Header({ setIsAdding, setIsAddingResource }) {
    return (
        <header style={{ backgroundColor: '#545', padding: '10px 0', marginBottom: '40px' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ color: '#fff', margin: 0 }}>Customer Management</h1>
                <div>
                    <button onClick={() => setIsAdding(true)} className='round-button' style={{ marginRight: '10px' }}>Add FTE</button>
                    {/* <button onClick={() => setIsAddingResource(true)} className='round-button'>Customer Estimation</button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
