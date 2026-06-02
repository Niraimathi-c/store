import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <a className="navbar-brand">
          Fashion Store
        </a>

        <div className="navbar-nav ms-auto">

          <a className="nav-link">Men</a>
          <a className="nav-link">Women</a>
          <a className="nav-link">Kids</a>
          <a className="nav-link">Brands</a>

          <Link
            href="/login"
            className="btn btn-warning ms-3"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}