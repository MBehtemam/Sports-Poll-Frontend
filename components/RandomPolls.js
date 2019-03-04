import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PollsCarousel from "./PollsCarousel";

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
          if (data.randomPolls.length > 0) {
            return <PollsCarousel polls={data.randomPolls} />;
          } else {
            <p>No Polls</p>;
          }
        }}
      </Query>
    );
  }
}
