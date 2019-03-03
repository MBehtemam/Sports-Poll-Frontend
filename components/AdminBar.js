import Router from "next/router";
import ButtonRow from "../components/styles/ButtonRow.styled";
const AdminBar = () => (
  <ButtonRow>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "polls" } })
      }
    >
      Manage Polls
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "pollStates" } })
      }
    >
      Manage Poll States
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "teams" } })
      }
    >
      Manage Teams
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "countries" } })
      }
    >
      Manage Countries
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "groups" } })
      }
    >
      Manage Groups
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "sports" } })
      }
    >
      Manage Sports
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "users" } })
      }
    >
      Manage Users
    </button>
  </ButtonRow>
);

export default AdminBar;
