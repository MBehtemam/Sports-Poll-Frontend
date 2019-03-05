import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PollCarouselPollStyled from "./styles/PollCarouselPoll.styled";
import SportTitle from "./styles/SportTitle.styled";
import PollTeamsTitle from "./styles/PollTeamsTitle.styled";
import PollMeta from "./styles/PollMeta.styled";
import Button from "./styles/Button.styled";
import PollCarouselFooter from "./styles/PollCarouselFooter.styled";

const UPDATE_POLL_MUTATION = gql`
  mutation UPDATE_POLL_MUTATION($pollId: String!, $predict: String!) {
    pollPrediction(pollId: $pollId, predict: $predict) {
      message
    }
  }
`;
export default class PollsCarouselPoll extends Component {
  render() {
    const { poll } = this.props;
    return (
      <Mutation mutation={UPDATE_POLL_MUTATION}>
        {(updatePoll, { loading, error }) => (
          <PollCarouselPollStyled>
            <SportTitle>
              <img src={`../static/sports/${poll.sport.icon}.png`} />
              <h1>{poll.sport.name}</h1>
            </SportTitle>
            <PollTeamsTitle>
              <span>{poll.home.name}</span>
              <span>vs</span>
              <span>{poll.away.name}</span>
            </PollTeamsTitle>
            <PollMeta>
              <span>{poll.group.name}</span>
              <SportTitle>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={`../static/flags/${poll.country.flag}.svg`}
                />
                <h1>{poll.country.name}</h1>
              </SportTitle>
            </PollMeta>
            <PollCarouselFooter>
              <div>
                <Button
                  onClick={e => {
                    // e.preventDefault();
                    updatePoll({
                      variables: { pollId: poll.id, predict: "home" }
                    });
                    this.props.onNextPoll();
                  }}
                  color="red"
                >
                  {poll.home.name} wins
                </Button>
                <Button
                  onClick={e => {
                    // e.preventDefault();
                    updatePoll({
                      variables: { pollId: poll.id, predict: "draw" }
                    });
                    this.props.onNextPoll();
                  }}
                  color="white"
                >
                  Draw
                </Button>
                <Button
                  onClick={e => {
                    e.preventDefault();
                    updatePoll({
                      variables: { pollId: poll.id, predict: "away" }
                    });
                    this.props.onNextPoll();
                  }}
                  color="red"
                >
                  {poll.away.name} wins
                </Button>
              </div>
              <div>
                <Button color="black" onClick={() => this.props.onNextPoll()}>
                  Skip
                </Button>
              </div>
            </PollCarouselFooter>
          </PollCarouselPollStyled>
        )}
      </Mutation>
    );
  }
}
