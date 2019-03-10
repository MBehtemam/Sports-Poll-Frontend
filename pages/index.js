import RandomPolls from "../components/RandomPolls";
import User from "../components/Users/User";
const IndexPage = () => (
  <div>
    <User>
      {({ data: { user } }) => {
        if (user) {
          return <RandomPolls />;
        } else {
          return <h1>For seeing Polls please register or sing in</h1>;
        }
      }}
    </User>
  </div>
);

export default IndexPage;
