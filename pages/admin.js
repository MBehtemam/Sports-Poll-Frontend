import React, { Component } from "react";
import AdminBar from "../components/AdminBar";
import CreatePollState from "../components/Polls/CreatePollState";
import User from "../components/Users/User.apollo";
import CountryManager from "../components/Countries/CountriesManager";
import SportsManager from "../components/Sports/SportsManager";
import GroupsManager from "../components/Groups/GroupsManager";
import TeamsManager from "../components/Teams/TeamsManager";
import PollsManager from "../components/Polls/PollsManager";
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
        return <PollsManager />;
      case "teams":
        return <TeamsManager />;
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
