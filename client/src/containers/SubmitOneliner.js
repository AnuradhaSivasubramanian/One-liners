import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SubmitOneliner extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/viewoneliner">Posts</Link>
      </nav>
    );
  }
}
