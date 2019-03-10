import Router from "next/router";
import {
  FaChartBar,
  FaGlobeAmericas,
  FaFootballBall,
  FaUserFriends,
  FaPeopleCarry,
  FaUsers,
  FaPollH,
  FaPoll
} from "react-icons/fa";

import ButtonRow from "../components/styles/ButtonRow.styled";
const AdminBar = () => (
  <ButtonRow>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "polls" } })
      }
    >
      <FaPollH />
      &nbsp; Polls
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "pollStates" } })
      }
    >
      <FaPoll />
      &nbsp; Poll States
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "teams" } })
      }
    >
      <FaPeopleCarry />
      &nbsp; Teams
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "countries" } })
      }
    >
      <FaGlobeAmericas />
      &nbsp; Countries
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "groups" } })
      }
    >
      <FaUsers />
      &nbsp; Groups
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "sports" } })
      }
    >
      <FaFootballBall />
      &nbsp; Sports
    </button>
    <button
      onClick={() =>
        Router.push({ pathname: "/admin", query: { section: "users" } })
      }
    >
      <FaUserFriends />
      &nbsp; Users
    </button>
    <button>
      <FaChartBar />
      &nbsp; Statics
    </button>
  </ButtonRow>
);

export default AdminBar;
