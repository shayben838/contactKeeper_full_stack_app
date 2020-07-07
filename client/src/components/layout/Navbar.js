import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li style={{ borderRight: "1px solid white" }}>
        <Link to='/'>
          <i className='fas fa-home'></i>
        </Link>
      </li>
      <li style={{ borderRight: "1px solid white" }}>
        <Link to='/info'>
          <i className='fas fa-info'></i>
        </Link>
      </li>
      {/* <li style={{ borderRight: "1px solid white" }}>
        <Link to='/about'>About</Link>
      </li> */}
      <li style={{ borderRight: "1px solid white" }}>
        <Link to='/'> Hello {user && user.user.name}</Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      {/* <li>
        <Link to='/about'>About</Link>
      </li> */}
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/' className='main-icon'>
          <i className={`${icon} p-1 main_icon`} />
          {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "CV-Tracker",
  icon: "far fa-eye",
};
export default Navbar;
