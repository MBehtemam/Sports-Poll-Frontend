import React from "react";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import Header from "./styles/Header.styled";
import Brand from "./styles/Brand.styled";
import User from "./User";
import Navbar from "./Navbar";
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
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
      {({ data: { user } }) => (
        <Navbar
          isLoggedIn={user ? true : false}
          isAdmin={user && user.permissions.includes("ADMIN")}
          user={user}
        />
      )}
    </User>
  </Header>
);
export default MainHeader;
