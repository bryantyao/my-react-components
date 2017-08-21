import React, { Component } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom'

export class NavLink extends Component {
  render() {
    const { to, children } = this.props
    return (
      <ReactNavLink activeClassName="active" isActive={this._isActive.bind({ pathname: to })} className="nav-link" to={to}>{children}</ReactNavLink>
    );
  }

  _isActive(match, location) {
    return location.pathname === this.pathname;
  }
}

