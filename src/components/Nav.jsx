import React from "react";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import logomark from "../assets/web-logo.png";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Homepage">
        <img src={logomark} alt="Home Button" height={30} />
        <span>Kharcha</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all it's data ?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
