import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint } from "../config";

const createClient = ({ headers }) => {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOption: {
          credentials: "include"
        },
        headers
      });
    }
  });
};
export default withApollo(createClient);
