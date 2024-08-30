import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-dark fw-bolder'>
          <i Class="fa-brands fa-youtube fa-beat-fade me-2"></i>
           Media-player
           <Link style={{textDecoration:"none", color:"red"}} to={'/'}>
          
           
           </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>  
    </>
  )
}

export default Header