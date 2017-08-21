import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class FullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const props = Object.assign({}, this.props.options, {
      afterLoad: this._afterLoad.bind(this),
      onLeave: this._onLeave.bind(this)
    });

    $(this.page)
      .fullpage(props);
  }

  render() {
    const { className, children } = this.props;

    const childrenWithRef = children.map((child, index) => {
      let childProps = {
        ref: (e) => { this[`child_${index}`] = e }
      };

      if(this.state[index]) {
        childProps.transition = this.state[index];
      }

      return React.cloneElement(child, childProps)
    });

    return(
      <div
        className={className || ''}
        ref={(page) => { this.page = page; }}
      >
        {childrenWithRef}
      </div>
    );
  }

  //private

  // Note: index starts at 1
  _afterLoad(anchor, index) {
    const enterIndex = index-1;
    const numChildren = this.props.children.length;

    if(0 <= enterIndex && enterIndex < numChildren) {
      this.setState({
        [enterIndex]: "enter",
      });
    }
  }

  // Note: index starts at 1
  _onLeave(index, nextIndex, direction) {
    let transitions = {};
    const leavingIndex = index-1;
    const enteringIndex = nextIndex-1;
    const numChildren = this.props.children.length;

    if(0 <= leavingIndex && leavingIndex < numChildren) {
      transitions[leavingIndex] = 'leaving';
    }

    if(0 <= enteringIndex && enteringIndex < numChildren) {
      transitions[enteringIndex] = 'entering';
    }

    this.setState(transitions);
  }
}
export default FullPage;

