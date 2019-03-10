import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PollsCarousel from "./Polls/PollsCarousel";

const RANDOM_POLLS_QUERY = gql`
  query RANDOM_POLLS_QUERY {
    randomPolls {
      id
      away {
        id
        name
      }
      home {
        id
        name
      }
      sport {
        name
        icon
      }
      group {
        name
      }
      country {
        name
        flag
      }
    }
  }
`;

export default class RandomPolls extends Component {
  render() {
    return (
      <Query query={RANDOM_POLLS_QUERY}>
        {({ data }) => {
          if (data && data.randomPolls && data.randomPolls.length > 0) {
            return <PollsCarousel polls={data.randomPolls} />;
          } else {
            return <p>No Polls</p>;
          }
        }}
      </Query>
    );
  }
}
