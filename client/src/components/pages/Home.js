import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className='grid-2' style={{ position: "relative" }}>
        <ContactForm />
        <div>
          <ContactFilter />
          <Contacts />
        </div>
        <Link to='/info'>
          <i className='fas fa-info-circle info'></i>
        </Link>
      </div>
    </Fragment>
  );
};
export default Home;
