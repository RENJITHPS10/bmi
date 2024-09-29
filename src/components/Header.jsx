import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from '/src/assets/logo1.png'
function Header() {
    return (
        <>
            <Navbar>
                <Container fluid >
                    <Navbar.Brand href="#home" className='text-white d-flex align-items-center'>
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top "
                        />
                        <h3 className='nill'>𝓕𝓲𝓽𝓷𝓮𝓼𝓼</h3>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </>
    )
}

export default Header
