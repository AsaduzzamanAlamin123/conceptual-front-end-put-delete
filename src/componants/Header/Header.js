
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const handleSearch = event=>{
        event.preventDefault();
       
        const searchText = event.target.searchText.value;
        
        const user ={searchText}
        console.log('hello',user);
    
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form onSubmit={handleSearch} className="d-flex">
        <FormControl
          type="search"
          name="searchText"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;