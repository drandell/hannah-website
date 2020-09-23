
import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Footer from "./footer";

export class ContactMe extends Component {

    render() {
        return (
            <>
                <header>
                    <Navbar sticky="top" variant="light" bg="custom">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                        </Nav> 
                    </Navbar>
                </header>
                <h2>Contact Me</h2>
                <Footer />
            </>
        );
    }
}
