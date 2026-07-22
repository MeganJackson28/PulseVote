import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");

    const timer = window.setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="logout-page">
      <div className="logout-card">
        <div className="logout-icon" aria-hidden="true">
          ✓
        </div>

        <h1>Successfully logged out</h1>

        <p>
          Your session has ended safely. You will be redirected to the
          PulseVote homepage in a few seconds.
        </p>

        <div className="logout-progress" aria-hidden="true">
          <div className="logout-progress-bar" />
        </div>

        <span className="logout-note">Redirecting automatically...</span>

        <div>
          <Link to="/" className="home-link">
            Return home now
          </Link>
        </div>
      </div>
    </section>
  );
}