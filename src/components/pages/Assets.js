import React from "react";

export default props => {
  // let path = "/Assets/";
  // const { asset } = this.props.match.params.asset; //  props.match.params.asset;
  // console.log("path: " + { path } + " assest: " + { asset });
  return (
    <React.Fragment>/assets/{props.match.params.asset}</React.Fragment>

    /* <div>
      <h1>Asset Page</h1>
      <h2>{props.match.params.asset}</h2>
    </div> */
  );
};
