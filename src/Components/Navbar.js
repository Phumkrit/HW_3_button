import React from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom"

const Navbar_v1 = () => {
  const history = useHistory()
  return (
<Navbar bg="light" expand="lg">
  {/*<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>*/}
  <NavLink to='/' exact className="navbar-brand">React-Bootstrap</NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink exact to="/product" className="nav-link" activeClassName="active">Product</NavLink>
      <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
      <NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact ME</NavLink>
      <NavLink exact to="/detail" className="nav-link" activeClassName="active">Detail</NavLink>
      <Nav.Link href="#link">Link</Nav.Link>
         <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() =>{
                  history.replace("/hospital")
                }}>Hospital List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() =>{
                  history.replace("/category")
                }}>
                  News Category
                </NavDropdown.Item>
      </NavDropdown>
      <NavLink className="nav-link" activeClassName="active" to="/upload">Upload</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
};
export default Navbar_v1