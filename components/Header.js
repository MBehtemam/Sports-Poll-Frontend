import React from "react";
import Header from "./styles/Header.styled";
import Brand from "./styles/Brand.styled";
import User from "./User";
import SignOut from "./SignOut";

const MainHeader = () => (
  <Header>
    <Brand>
      <h1>Sports Poll</h1>
    </Brand>
    <User>
      {({ data: { user } }) => {
        {
          return user ? (
            <p>
              Hello {user.name}
              <SignOut />
            </p>
          ) : (
            <p>Sign in</p>
          );
        }
      }}
    </User>
  </Header>
);
export default MainHeader;
