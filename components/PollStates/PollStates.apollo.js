import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_POLLSTATES_QUERY = gql`
  query ALL_POLLSTATES_QUERY {
    pollStates {
      id
      name
      value
    }
  }
`;

const PollStates = props => (
  <Query query={ALL_POLLSTATES_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default PollStates;
export { ALL_POLLSTATES_QUERY };
