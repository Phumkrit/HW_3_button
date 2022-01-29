import React from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { string } from "yup";

const Navbar_v1 = () => {
  const history = useHistory()
  const [profile,setprofile] = React.useState(null)
  const getprofile = () => {
    const profileValue = JSON.parse(localStorage.getItem('Profile'))
    if (profileValue){
      setprofile(profileValue)
    }
  }
  React.useEffect(() => {
    getprofile()
  },[])
  const logout = () => {
    localStorage.removeItem('Profile')
    localStorage.removeItem('token')
    history.replace("/")
    history.go(0)
  }
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
      <NavLink className="nav-link" activeClassName="active" to="/member">Member</NavLink>
    </Nav>

   


   {
     profile ? (
        <span className="nav-text">Welcome {profile.name} 
        <button className="btn btn-danger ml-2" onClick={logout}>Logout</button>
        </span>
     ) : (
       <> <Nav>
       <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
       <NavLink className="nav-link" activeClassName="active" to="/login">login</NavLink>
       </Nav></>
     )
   }

  </Navbar.Collapse>
</Navbar>
  );
};
export default Navbar_v1