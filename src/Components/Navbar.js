import React from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom"

const Navbar_v1 = () => {
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
      <NavDropdown title="WorkShop Pagination" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Hospital">Hosital List</NavDropdown.Item>
        <NavDropdown.Item href="/category">News Category</NavDropdown.Item>
      </NavDropdown>
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