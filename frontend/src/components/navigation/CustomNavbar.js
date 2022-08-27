import React from 'react';
import {Button, Container, Form, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CustomAlert from '../extras/CustomAlert';
 
const CustomNavbar = ({
  isAuthenticated,
  user
}) => {

  const authLinks = () => {
    return(
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" variant="success"
      style={{color: 'white'}}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>)
  }

  const guestLinks = () => {
    return(
      <Form className="d-flex">
        <Button variant="outline-info" style={{'marginRight': "10px"}}>Sign in</Button>
        <Button variant="primary">Sign up</Button>
      </Form>
    )
  }

    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li className="nav-item">
              <Link to="/signup" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </Nav>
          {
            isAuthenticated ?
            authLinks()
            :
            guestLinks()
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomAlert />
      </>
    )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user
})


export default connect(mapStateToProps,{

})(CustomNavbar);