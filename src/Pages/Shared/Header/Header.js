import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
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
                    <FontAwesomeIcon className='me-1' icon={faCar}></FontAwesomeIcon>
                    SHE CAR WAREHOUSE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/additem">AddItem</Nav.Link>
                                    <Nav.Link as={Link} to="/manageitem">ManageItem</Nav.Link>
                                    <Nav.Link as={Link} to="myitem">MyItems</Nav.Link>

                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='button-sign' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <button className='button-login'>
                                        <Nav.Link className='text-white btn-link px-3' as={Link} to={'/login'}>
                                            Login
                                        </Nav.Link>
                                    </button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;