import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const CORRECT_POLLS_COUNT = gql`
  query CORRECT_POLLS_COUNT {
    userCorrectPolls {
      title
      results {
        label
        count
      }
    }
  }
`;

const CorrectPolls = () => (
  <Query query={CORRECT_POLLS_COUNT}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      return (
        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <BarChart
              width={400}
              height={300}
              data={data.userCorrectPolls.results}
            >
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }}
  </Query>
);
export default CorrectPolls;
