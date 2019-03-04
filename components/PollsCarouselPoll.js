import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PollCarouselPollStyled from "./styles/PollCarouselPoll.styled";
import SportTitle from "./styles/SportTitle.styled";
import PollTeamsTitle from "./styles/PollTeamsTitle.styled";
import PollMeta from "./styles/PollMeta.styled";
import Button from "./styles/Button.styled";
import PollCarouselFooter from "./styles/PollCarouselFooter.styled";

export default class PollsCarouselPoll extends Component {
  render() {
    const { poll } = this.props;
    return (
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
            <Button color="red">{poll.home.name} wins</Button>
            <Button color="white">Draw</Button>
            <Button color="red">{poll.away.name} wins</Button>
          </div>
          <div>
            <Button color="black">Skip</Button>
          </div>
        </PollCarouselFooter>
      </PollCarouselPollStyled>
    );
  }
}
