import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_SPORTS_QUERY = gql`
  query ALL_SPORTS_QUERY {
    sports {
      id
      name
      icon
    }
  }
`;
const Sports = props => (
  <Query {...props} query={ALL_SPORTS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default Sports;
export { ALL_SPORTS_QUERY };
