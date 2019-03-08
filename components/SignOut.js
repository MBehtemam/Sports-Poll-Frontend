import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../components/Users/User";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    singout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          signout();
        }}
      >
        Sign Out
      </a>
    )}
  </Mutation>
);
export default Signout;
