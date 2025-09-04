import { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="mobile-menu">
          <Link to="/terms" onClick={() => setOpen(false)}>
            Terms
          </Link>
          <Link to="/pricelist" onClick={() => setOpen(false)}>
            Pricelist
          </Link>
        </div>
      )}
    </div>
  );
}
