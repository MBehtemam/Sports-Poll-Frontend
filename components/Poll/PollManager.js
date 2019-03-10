import React, { Component } from "react";
import UpdatePoll from "./UpdatePoll";
import User from "../Users/User.apollo";
import Columns from "../styles/Columns";

class PollManager extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    const { pollId } = this.props;
    return (
      <Columns>
        <UpdatePoll pollId={pollId} />
      </Columns>
    );
  }
}

export default PollManager;
