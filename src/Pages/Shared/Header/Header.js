import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className='w-75' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/additem">AddItem</Nav.Link>
                                    <Nav.Link as={Link} to="/manageitem">ManageItem</Nav.Link>
                                    <Nav.Link as={Link} to="about">MyItems</Nav.Link>

                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='button' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='button text-white btn btn-link px-3' as={Link} to={'/login'}>
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;