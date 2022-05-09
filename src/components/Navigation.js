import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ({ title }) => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper deep-purple">
                    <a className="brand-logo" href="/">{ title }</a>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-item">
                            <Link to="/description">Sākums</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutnav">Skati</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/options">Iespējas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/table">Tabula</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      );
}

Navigation.defaultProps = {
    title: "ReactJS prezentācija",
}

export default Navigation;

