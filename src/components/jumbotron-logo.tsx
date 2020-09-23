/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from '../images/logo.png'; // Tell webpack this JS file uses this image

export class JumbotronLogo extends Component {

  render() {
      return (
          <>
            <section className="jumbotron text-center bg-custom">
              <img src={logo} alt="Logo" height='500' width='700'/>
            </section>
          </>
      );
  }
}