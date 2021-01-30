/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
//import promo from '../images/promo.jpg'; // Tell webpack this JS file uses this image
import newpromo from '../images/promo-2.jpg'; // Tell webpack this JS file uses this image

export class JumbotronPromo extends Component {

  style = {
    maxHeight: "100%",
    maxWidth: "100%",
  };

  render() {
      return (
          <>
            <section>
              <img src={newpromo} alt="Promo" style={this.style} />
            </section>
          </>
      );
  }
}