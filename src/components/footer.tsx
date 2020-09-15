/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from 'react-bootstrap';

export default class Footer extends React.Component {
    
    backToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    render() {
        return (
            <footer className="text-muted py-5">
                <div className="container">
                    
                    <div onClick={() => this.backToTop()}>
                        <p className="float-right">
                            <Button variant="outline-secondary" href="#">Back to Top</Button> 
                        </p>
                    </div>
                    <p className="font-weight-light">
                        &copy; Hannah Martin 2020 (Website created by Daniel Randell)
                    </p>
                </div>
            </footer>
        );
    }
};