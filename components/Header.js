import React from "react";
import Link from "next/link";
import Header from "./styles/Header.styled";
import Brand from "./styles/Brand.styled";
import User from "./User";
import SignOut from "./SignOut";

const MainHeader = () => (
  <Header>
    <Brand>
      <Link href="/">
        <h1>
          <a href="">Sports Poll</a>
        </h1>
      </Link>
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
            <Link href="/signup">
              <a>Sign in</a>
            </Link>
          );
        }
      }}
    </User>
  </Header>
);
export default MainHeader;
