import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("child 1 constructor");
  }

  componentDidMount() {
    console.log("child 1 did mount");
  }
  componentDidUpdate() {
    console.log("child 1 did update");
  }
  render() {
    console.log("child 1 render");
    return <h1>User {this.props.data.count}</h1>;
  }
}
