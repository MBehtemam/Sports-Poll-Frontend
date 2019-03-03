import React, { Component } from "react";
import AdminBar from "../components/AdminBar";
import CreatePolls from "../components/CreatePoll";
import CreateCountry from "../components/CreateCountry";
import CreateGroup from "../components/CreateGroup";
import CreatePollState from "../components/CreatePollState";
import CreateSport from "../components/CreateSport";
import CreateTeam from "../components/CreateTeam";
class AdminPage extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  getSection = () => {
    const {
      query: { section }
    } = this.props;
    switch (section) {
      case "polls":
        return <CreatePolls />;
      case "teams":
        return <CreateTeam />;
      case "groups":
        return <CreateGroup />;
      case "pollStates":
        return <CreatePollState />;
      case "sports":
        return <CreateSport />;
      case "countries":
        return <CreateCountry />;
      default:
        return <span>No selected</span>;
    }
  };
  render() {
    return (
      <div>
        <AdminBar />
        {this.getSection()}
      </div>
    );
  }
}

export default AdminPage;
