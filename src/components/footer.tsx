/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import aitiLogo from '../images/aiti.png'; 
import ciolLogo from '../images/ciol.png'; 

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
            <footer className="text-muted">
                <div className="container">
                    <Row>
                    <Col className="justify-content-center text-center align-middle col-logos">
                            <figure className="figure"> 
                                <img src={aitiLogo} alt="Aiti Logo" className="figure-img img-logo" />
                                <figcaption className="figure-caption font-weight-light">Membership no. 00020564</figcaption>
                            </figure>             
                        </Col>
                        <Col className="justify-content-center text-center align-middle col-logos">
                            <figure className="figure"> 
                                <img src={ciolLogo} alt="Ciol Logo" className="figure-img img-logo-ciol rounded" />
                                <figcaption className="figure-caption font-weight-light">Membership no. 63354</figcaption>
                            </figure>             
                        </Col>
                    </Row>   
                    <Row>
                        <Col>    
                            <p className="font-weight-light">
                                &copy; HLM Translations 2020 <br />(Website created by Daniel Randell)
                            </p>
                        </Col>
                        <Col>
                            <div onClick={() => this.backToTop()}>
                                <p className="float-end">
                                    <Button variant="outline-secondary" href="#">Back to Top</Button> 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}