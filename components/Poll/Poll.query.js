import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_POLL_QUERY = gql`
  query GET_POLL_QUERY($pollId: ID!) {
    poll(id: $pollId) {
      id
      away {
        id
        name
      }
      home {
        id
        name
      }
      group {
        id
        name
      }
      country {
        id
        name
        flag
      }
      sport {
        id
        name
        icon
      }
      result
      state {
        id
        name
        value
      }
    }
  }
`;

const Poll = props => (
  <Query {...props} query={GET_POLL_QUERY} variables={{ pollId: props.pollId }}>
    {payload => props.children(payload)}
  </Query>
);
export default Poll;
export { GET_POLL_QUERY };
