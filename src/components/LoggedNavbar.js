import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLinkClassName = (location, path) => {
    if (location.pathname === path) {
        return "navbar-brand";
    } else {
        return "nav-link";
    }
}

const LoggedNavbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <ul className="navbar-nav mr-auto" style={{ flex: 1 }}>
                <li className="navbar-item" style={{ flex: 1 }}>
                    <Link to="/accountsList" className={getLinkClassName(location, "/accountsList")}>
                        Accounts
                        </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className={getLinkClassName(location, "/")}>
                        Logout
                        </Link>
                </li>
            </ul>
        </nav>
    );
}

export default LoggedNavbar;