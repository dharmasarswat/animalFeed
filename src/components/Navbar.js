import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { navLinks } from '../assets/navlinks'
import { Link } from 'react-router-dom'

export const NavBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#ffffff' }} variant="light" className="mt-4" sticky='top'>
            <Container>
                <Navbar.Brand><img src={process.env.PUBLIC_URL+'/animal-feed.png'} alt="animal-feed" style={{ height: 'auto', width: '50px' }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        { navLinks.map((data, index) => {
                            if(data.sublinks.length > 0){
                                    return <NavDropdown title={data.name} id={`collasible-nav-dropdown-${index}`} key={index} className={'px-3'}>
                                        { data.sublinks.map((sublink, idx) => (
                                            <Link to={sublink.path} key={index+''+idx} ><NavDropdown.Item>{sublink.name}</NavDropdown.Item></Link>
                                        )) }
                                    </NavDropdown>
                            }
                            return <Link to={data.path} key={index}><Nav.Item className={'px-3'}>{data.name}</Nav.Item></Link>
                        }) }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 