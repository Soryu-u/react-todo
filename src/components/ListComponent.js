import React from "react";
import { NavLink } from "react-router-dom";
import "../css/listComponent.css";

export const ListComponent = (props) => {
  return (
    <>
      {
        <li className="listComponent">
          <NavLink className="navLink" to={`/lists/${props.list.list_id}`}>
            {props.list.name}
          </NavLink>
        </li>
      }
    </>
  );
};
