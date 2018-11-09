import React, { Component } from "react";

class Asset extends Component {
  /*
  constructor() {
    super(props);
  }
  */
  render() {
    return (
      <React.Fragment>/assets/{this.props.match.params.asset}</React.Fragment>
    );
  }
}

export default Asset;
