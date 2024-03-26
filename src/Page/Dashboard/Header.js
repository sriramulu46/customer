import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ setIsAdding, setIsAddingResource }) {
    return (
        
        <header style={{ backgroundColor: '#545', padding: '10px 0', marginBottom: '40px' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ color: '#fff', margin: 0 }}>Customer Management</h1>
                <div>
                    <button onClick={() => setIsAdding(true)} className='round-button' style={{ marginRight: '10px' }}>Add FTE</button>
                    <button onClick={() => setIsAdding(true)} className='round-button' style={{ marginRight: '10px' }}>Customer Data</button>
                </div>
            </div>
        </header>
        

    //     <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Customer Management</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    );
}

export default Header;
