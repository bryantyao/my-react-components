import React, { Component } from 'react';
import _ from 'lodash';

export class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children, onEntering, onEnter, onLeave, transition, ...other } = this.props;

    const child = React.Children.only(children);
    const childWithTransition = React.cloneElement(child, {
      className: this._getTransitionProp(this.props, transition)
    });

    return(
      <div className={`section ${className || ''}`} {...other}>
        {childWithTransition}
      </div>
    );
  }

  //private
  
  _getTransitionProp(props, transition) {
    return transition ? (props[`on${_.capitalize(transition)}`] || '') : '';
  }
}
export default Section;

