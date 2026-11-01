import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Component/Icon";

export default function NotFound() {
  return (
    <main id="main">
      <section
        className="band"
        style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center" }}
      >
        <div className="wrap" style={{ display: "grid", gap: 14, justifyItems: "center" }}>
          <div className="kicker">Error 404</div>
          <h1 style={{ color: "var(--brand)" }}>Page not found</h1>
          <p style={{ color: "var(--muted)", maxWidth: 460 }}>
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/" className="btn btn-gold">
            Go back home
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </main>
  );
}
