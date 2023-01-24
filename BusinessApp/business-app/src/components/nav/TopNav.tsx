import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../model/types";
import styles from "./TopNav.module.css";

const TopNav: React.FC<{ links: NavItem[] }> = (props) => {
  console.log(props.links);
  let activeStyle = {
    textDecoration: "none",
    color: "red",
  };
  let inActiveStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <Fragment>
      <nav className={styles.topnav}>
        <div>
          {props.links.map((link) => {
            return (
              <NavLink
                className={styles.main_container}
                style={({ isActive }) =>
                  isActive ? activeStyle : inActiveStyle
                }
                to={link.url}
                key={link.url}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.profile}>logo</div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
