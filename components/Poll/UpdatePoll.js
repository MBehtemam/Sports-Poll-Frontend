import React, { Component } from "react";
import PollQuery from "./Poll.query";
import Error from "../ErrorMessage";
import Form from "../styles/Form.styled";
import PollMutation from "./Poll.mutation";
import PollStatesQuery from "../PollStates/PollStates.apollo";
import Picker from "../Picker";
import PollResultPicker from "../PollResult/PollResultPicker";

export default class UpdatePoll extends Component {
  state = {
    stateId: "",
    result: null
  };
  render() {
    const { pollId } = this.props;
    return (
      <PollQuery pollId={pollId}>
        {({ data }) => {
          if (data && data.poll) {
            return (
              <PollMutation>
                {({ updatePoll, loading, error }) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      if (this.state.stateId !== "") {
                        const res = await updatePoll({
                          variables: {
                            pollId,
                            stateId: this.state.stateId,
                            result: this.state.result
                          }
                        });
                      }
                    }}
                  >
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <legend>Update Poll</legend>
                      <label htmlFor="country" name="country">
                        Country:
                        <input
                          type="text"
                          readOnly
                          value={data.poll.country.name}
                        />
                      </label>
                      <label htmlFor="group" name="group">
                        Group:
                        <input
                          type="text"
                          readOnly
                          value={data.poll.group.name}
                        />
                      </label>
                      <label htmlFor="sport" name="sport">
                        Sport:
                        <input
                          type="text"
                          readOnly
                          value={data.poll.sport.name}
                        />
                      </label>
                      <label htmlFor="result" name="result">
                        Result:
                        <PollResultPicker
                          defaultValue={data.poll.result}
                          onChange={r => this.setState({ result: r })}
                        />
                      </label>
                      <label htmlFor="state" name="state">
                        State:
                        <PollStatesQuery>
                          {({ data: { pollStates } }) => {
                            if (pollStates && pollStates.length > 0) {
                              return (
                                <Picker
                                  onChange={val =>
                                    this.setState({ stateId: val })
                                  }
                                  items={pollStates}
                                  itemValue="name"
                                  keyValue="id"
                                  defaultValue={data.poll.state.id}
                                />
                              );
                            } else {
                              return <p>No State</p>;
                            }
                          }}
                        </PollStatesQuery>
                      </label>
                      <label htmlFor="away" name="away">
                        Away Team:
                        <input
                          type="text"
                          readOnly
                          value={data.poll.away.name}
                        />
                      </label>
                      <label htmlFor="home" name="home">
                        Home Team:
                        <input
                          type="text"
                          readOnly
                          value={data.poll.home.name}
                        />
                      </label>
                      <button type="submit">Update Poll</button>
                    </fieldset>
                  </Form>
                )}
              </PollMutation>
            );
          } else {
            return <p>Could not find the poll</p>;
          }
        }}
      </PollQuery>
    );
  }
}
