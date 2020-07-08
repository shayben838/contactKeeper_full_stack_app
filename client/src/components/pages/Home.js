import React, { useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/contactsForm/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../layout/Spiner";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {authContext.loading ? (
        <Spinner />
      ) : (
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
      )}
    </Fragment>
  );
};
export default Home;
