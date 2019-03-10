import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_POLLS_QUERY } from "../Polls/Polls";

const UPDATE_POLL_MUTATION = gql`
  mutation UPDATE_POLL_MUTATION(
    $pollId: ID!
    $stateId: ID!
    $result: PollResult!
  ) {
    updatePoll(pollId: $pollId, stateId: $stateId, result: $result) {
      id
    }
  }
`;
const updatePoll = props => (
  <Mutation
    mutation={UPDATE_POLL_MUTATION}
    refetchQueries={[{ query: ALL_POLLS_QUERY }]}
  >
    {(updatePoll, { loading, error }) => {
      return props.children({ updatePoll, loading, error });
    }}
  </Mutation>
);
export default updatePoll;
