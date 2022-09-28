import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Header(props) {

  const user = useSelector(selectUser);

  let i = 0;
  const links = props.links.map((link) => {
    i++;
    return (
      <li className="nav-item" key={i}>
        <a className="nav-link" href={link[1]}>
          {link[0]}
        </a>
      </li>
    );
  });

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">

          {/* Logo section */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              {props.img ? <img src={props.img} alt="" /> : <span>{props.title}</span>}
            </span>
          </a>

          {/* TODO Hamburger expand functionality */}
          {/* Hamburger */}
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              {user ? (
                <li className="nav-item" key={i}>
                  <a className="nav-link" href={`/user/${user._id}`}>
                    {user.user.username}
                  </a>
                </li>
              ) : links}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
