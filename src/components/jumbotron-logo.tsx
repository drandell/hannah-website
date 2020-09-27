/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from '../images/logo.png'; // Tell webpack this JS file uses this image

export class JumbotronLogo extends Component {

  style = {
    maxHeight: "100%",
    maxWidth: "100%",
  };

  render() {
      return (
          <>
            <section className="jumbotron text-center bg-custom">
              <img src={logo} alt="Logo" style={this.style} />
            </section>
          </>
      );
  }
}