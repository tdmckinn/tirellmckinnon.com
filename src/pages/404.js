import React, { Component } from "react";
import Helmet from "react-helmet";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <Helmet title={`404 | Page Not Found`} />
        <div>
          <h1>Sorry page not found!</h1> <a href="/">Go Home</a>
        </div>
      </div>
    );
  }
}

export default NotFound;
