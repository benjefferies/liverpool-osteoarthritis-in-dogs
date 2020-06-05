import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Liverpool Osteoarthritis in Dogs</h1>

    <p className="lead">
      An way to help you keep a eye on things. Take a <a href="/test">Test</a>
    </p>
  </div>
);

export default Hero;
