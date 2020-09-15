/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

export const Header = () => {
 return (
  <header>
    <Slide direction="down" triggerOnce>
        <Navbar sticky="top" variant="light" bg="custom">
            <Nav className="mr-auto">
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#about-me">About Me</Nav.Link>
            </Nav> 

            <Nav className="ml-auto">
                <Nav.Link href="#contact-me">Contact Me</Nav.Link>
            </Nav>
        </Navbar>
    </Slide>
  </header>
 );
};