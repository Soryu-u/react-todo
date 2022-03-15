import React from "react";
import { NavLink } from "react-router-dom";
import "../css/dashboard.css";
import { ListComponent } from "./ListComponent";

export const Dashboard = (props) => {
  return (
    <>
      <main className="dashboard">
        <h1>Dashboard:</h1>
        <ul>
          <li className="listComponent">
            <NavLink className="navLink" to="/">
              All tasks
            </NavLink>
            <br />
          </li>
          <li className="listComponent">
            <NavLink className="navLink" to="/today">
              Tasks for today
            </NavLink>
          </li>

          {props.lists.map((list, i) => (
            <ListComponent key={i} list={list} />
          ))}
        </ul>
      </main>
    </>
  );
};
