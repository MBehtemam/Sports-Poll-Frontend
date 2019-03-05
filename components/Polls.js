import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_POLLS_QUERY = gql`
  query ALL_POLLS_QUERY {
    polls {
      away {
        name
      }
      home {
        name
      }
      state {
        name
      }
      sport {
        icon
      }
    }
  }
`;
const Polls = props => (
  <Query {...props} query={ALL_POLLS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default Polls;
export { ALL_POLLS_QUERY };
