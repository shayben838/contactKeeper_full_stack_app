import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spiner from "../layout/Spiner";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filterd, getConacts, loading } = contactContext;
  useEffect(() => {
    getConacts();
    // eslint-disable-next-line
  }, []);
  if (!contacts && !loading) {
    if (!contacts || contacts === []) {
      return <h4>Please add a company</h4>;
    }
  }
  return (
    <div>
      <Fragment>
        {contacts !== null && !loading ? (
          <TransitionGroup>
            {filterd !== null
              ? filterd.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={2000}
                    classNames={"item"}
                  >
                    <ContactItem contact={contact} key={contact._id} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={2000}
                    classNames={"item"}
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spiner />
        )}
      </Fragment>
    </div>
  );
};
export default Contacts;
