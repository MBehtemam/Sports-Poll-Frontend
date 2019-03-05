import React, { Component } from "react";
import AdminBar from "../components/AdminBar";
import CreatePolls from "../components/CreatePoll";
import CreatePollState from "../components/CreatePollState";
import CreateTeam from "../components/CreateTeam";
import User from "../components/User";
import CountryManager from "../components/CountriesManager";
import SportsManager from "../components/SportsManager";
import GroupsManager from "../components/GroupsManager";
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
        return <GroupsManager />;
      case "pollStates":
        return <CreatePollState />;
      case "sports":
        return <SportsManager />;
      case "countries":
        return <CountryManager />;
      default:
        return <span>No selected</span>;
    }
  };
  render() {
    return (
      <User>
        {({ data: { user } }) =>
          user.permissions.includes("ADMIN") ? (
            <div>
              <AdminBar />
              {this.getSection()}
            </div>
          ) : (
            <p>You don't have permission</p>
          )
        }
      </User>
    );
  }
}

export default AdminPage;
