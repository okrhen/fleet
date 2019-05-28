import React from "react";
import { NavLink } from "react-router-dom";

import { sidebarList } from "./sidebar-utils";
import { Icon } from "../";

const Sidebar = () => (
  <div className="Sidebar">
    <ul className="Sidebar-list">
      <li className="Sidebar-list-item">
        <Icon name="user-tie" />
      </li>
      {sidebarList.map(({ path, name, icon }) => (
        <li className="Sidebar-list-item" key={name}>
          <NavLink exact to={path} activeClassName="isActive">
            <Icon name={icon} />
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
