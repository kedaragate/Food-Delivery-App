import React from "react";

export default class User2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("child 2 constructor");
  }

  componentDidMount() {
    console.log("child 2 did mount");
  }
  componentDidUpdate() {
    console.log("child 2 did update");
  }
  render() {
    console.log("child 2 render");
    return <h1>User {this.props.data.count}</h1>;
  }
}
