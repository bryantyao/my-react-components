import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <nav className={`header code d-flex flex-row justify-content-end ${className || ""}`}>
          {children}
      </nav>
    );
  }

  _isActive(match,location) {
    return location.pathname === this.path;
  }
}

