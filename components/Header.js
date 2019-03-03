import React from "react";
import Header from "./styles/Header.styled";
import Brand from "./styles/Brand.styled";
import User from "./User";

const MainHeader = () => (
  <Header>
    <Brand>
      <h1>Sports Poll</h1>
    </Brand>
    <User>
      {({ data: { user } }) => {
        if (user) {
          return <p>{user.name}</p>;
        }
        return <p>Sign in</p>;
      }}
    </User>
  </Header>
);
export default MainHeader;
