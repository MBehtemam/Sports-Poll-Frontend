import React, { Component } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Container from "../components/styles/Container.styled";

export default class Page extends Component {
  render() {
    return (
      <Container>
        <Meta />
        <Header />
        {this.props.children}
      </Container>
    );
  }
}
