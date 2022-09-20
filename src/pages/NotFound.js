import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-8">Oops!</h1>
          <p className="text-2xl mb-8">404 - Page not found!</p>
          <Link className="btn btn-primary btn-m" to="/">
            <FaHome className="mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
