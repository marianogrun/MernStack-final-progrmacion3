import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLinkClassName = (location, path) => {
    if (location.pathname === path) {
        return "navbar-brand";
    } else {
        return "nav-link";
    }
}

const UnloggedNavbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className={getLinkClassName(location, "/")}>
                            Sign in
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className={getLinkClassName(location, "/create")}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default UnloggedNavbar;