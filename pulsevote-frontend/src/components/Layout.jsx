import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(Boolean(token));
  }, [location.pathname]);

  const getNavClass = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">P</span>
          <span className="brand-name">PulseVote</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end className={getNavClass}>
            Home
          </NavLink>

          {!loggedIn && (
            <>
              <NavLink to="/login" className={getNavClass}>
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "nav-action active" : "nav-action"
                }
              >
                Register
              </NavLink>
            </>
          )}

          {loggedIn && (
            <>
              <NavLink to="/dashboard" className={getNavClass}>
                Dashboard
              </NavLink>

              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "nav-action active" : "nav-action"
                }
              >
                Logout
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}