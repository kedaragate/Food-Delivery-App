import React from "react";
import User from "./User";
import User2 from "./User2";

class About extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  handleClick() {
    this.setState(() => {
      return this.state.count++;
    });
  }

  render() {
    console.log("about rendered");
    return (
      <>
        <h1>About Page {this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Click</button>

        <User data={this.state} />
        <User2 data={this.state} />
      </>
    );
  }
}
export default About;
