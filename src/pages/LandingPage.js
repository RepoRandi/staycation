import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";

import landingPage from "json/landingPage.json";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
