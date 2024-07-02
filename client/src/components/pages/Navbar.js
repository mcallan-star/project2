import { Outlet, Link } from 'react-router-dom';
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";

const Navbar = () => {
    const { user, logout } = useContext(UserContext);

    

    const authenticated_greeting = (
        <Fragment>
            <h5>Welcome Back, {user.username}</h5>
        </Fragment>
    )
    const unauthenticated_greeting = (
        <Fragment>
            <h5>Welcome, Guest</h5>
        </Fragment>
    )

    const authenticated_login_reg = (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/foods">My Foods</Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    onClick={logout}
                    to="/login"
                >Log Out</Link>
            </li>
        </Fragment>
    )

    const unauthenticated_login_reg = (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </Fragment>
    )

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h1>Food App</h1></Link>
                    {user.authenticated ? authenticated_greeting : unauthenticated_greeting}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            
                            {/**
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Quick Access
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" href="#">Favorites</Link></li>
                                    <li><Link className="dropdown-item" href="#">Discover</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="#">Settings</Link></li>
                                </ul>
                            </li>
                             */}
                             
                             {user.authenticated ? authenticated_login_reg : unauthenticated_login_reg}
                        </ul>

                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Let's Go!</button>
                        </form> */}
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;
