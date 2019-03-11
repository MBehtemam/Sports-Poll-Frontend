import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const SPORT_POLLS_COUNT = gql`
  query SPORT_POLLS_COUNT {
    sportsPollCount {
      title
      results {
        label
        count
      }
    }
  }
`;

const SportsPollsCount = () => (
  <Query query={SPORT_POLLS_COUNT}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      return (
        <BarChart width={400} height={300} data={data.sportsPollCount.results}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      );
    }}
  </Query>
);
export default SportsPollsCount;
