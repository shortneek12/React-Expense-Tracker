// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { LockClosedIcon, TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/web-logo.png";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="Home Button" height={30} />
        <span>Kharcha</span>
      </NavLink>
      <div className="btn-group">
        {userName && (
          <>
            <Form>
              <NavLink to="/" className="btn btn--primary">
                <span>Logout</span>
                <LockClosedIcon width={20} />
              </NavLink>
            </Form>

            <Form
              method="post"
              action="logout"
              onSubmit={(event) => {
                if (!confirm("Delete user and all data?")) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit" className="btn btn--warning">
                <span>Delete User</span>
                <TrashIcon width={20} />
              </button>
            </Form>
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
