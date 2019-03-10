import Router from "next/router";
import ButtonRow from "../components/styles/ButtonRow.styled";
const AdminBar = () => (
  <ButtonRow>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "polls" } })
      }
    >
      Polls
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "pollStates" } })
      }
    >
      Poll States
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "teams" } })
      }
    >
      Teams
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "countries" } })
      }
    >
      Countries
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "groups" } })
      }
    >
      Groups
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "sports" } })
      }
    >
      Sports
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "users" } })
      }
    >
      Users
    </button>
    <button>Statics</button>
  </ButtonRow>
);

export default AdminBar;
