/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import aitiLogo from '../images/aiti.png'; 

export default class Footer extends React.Component {
    
    backToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    style = {
        maxHeight: "10%",
        maxWidth: "10%",
    };

    render() {
        return (
            <footer className="text-muted py-5">
                <div className="container">
                        <Col className="text-center">
                            <img src={aitiLogo} alt="Aiti Logo" style={this.style} />
                            <p className="font-weight-light">
                                <br />Associate member of the ITI (membership no. 00020564). 
                                <br />This membership is attached to me as an individual and not HLM Translations.
                            </p>
                        </Col>
                    
                    <Row>
                        <Col>    
                            <p className="font-weight-light">
                                &copy; HLM Translations 2020 <br />(Website created by Daniel Randell)
                            </p>
                        </Col>
                        <Col>
                            <div onClick={() => this.backToTop()}>
                                <p className="float-right">
                                    <Button variant="outline-secondary" href="#">Back to Top</Button> 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
};