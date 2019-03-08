import React, { Component } from "react";
import { render } from "react-dom";
import PollsCarouselPoll from "./PollsCarouselPoll";

class PollsCarousel extends Component {
  state = {
    currentIndex: 0,
    ended: false
  };
  nextPoll = () => {
    const { polls } = this.props;
    const { currentIndex } = this.state;
    if (currentIndex + 1 >= polls.length) {
      this.setState({ ended: true });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };
  render() {
    return !this.state.ended ? (
      <PollsCarouselPoll
        onNextPoll={this.nextPoll}
        poll={this.props.polls[this.state.currentIndex]}
      />
    ) : (
      <p>No Polls</p>
    );
  }
}
export default PollsCarousel;
