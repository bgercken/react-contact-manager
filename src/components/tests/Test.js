import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    // Do stuff to fetch data for the component.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, body: json.body }));
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   // Depracated
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  //   // Depracated
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log("getDerivedStateFromProps");
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
