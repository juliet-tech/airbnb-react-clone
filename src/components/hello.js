import React from "react";

class Hello extends React.Component {
  render() {
    // The goal of a component is to create this render method that will return the html inside the method
    return <div>Hello {this.props.firstName} {this.props.lastName}!</div>;
  }
}

export default Hello;
