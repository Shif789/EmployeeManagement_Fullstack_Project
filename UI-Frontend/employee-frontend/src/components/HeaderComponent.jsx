import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to={"https://ineuron.ai"}>
              <h1 className="text-center">EMPOYEE MANAGEMENT APPLICATION</h1>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
