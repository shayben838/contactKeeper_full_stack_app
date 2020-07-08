import React, { useState, useContext, useEffect, Fragment } from "react";
import ContactContext from "../../../context/contact/contactContext";
import ContactInner from "./ContactsInner";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        position: "",
        firstInterview: "",
        secondInterview: "",
        comments: "",
        conservationPoint_1: "",
        conservationPoint_2: "",
        pointToImprove_1: "",
        pointToImprove_2: "",
        link: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const [conclusion, setConclusion] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    position: "",
    firstInterview: "",
    secondInterview: "",
    comments: "",
    conservationPoint_1: "",
    conservationPoint_2: "",
    pointToImprove_1: "",
    pointToImprove_2: "",
    link: "",
    type: "personal",
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearAll();
    }

    setContact({
      name: "",
      email: "",
      position: "",
      firstInterview: "",
      secondInterview: "",
      comments: "",
      conservationPoint_1: "",
      conservationPoint_2: "",
      pointToImprove_1: "",
      pointToImprove_2: "",
      link: "",
      type: "personal",
    });
  };
  const clearSingleState = (state) => {
    setContact({ ...contact, [state]: "" });
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <Fragment>
      <ContactInner
        contact={contact}
        current={current}
        addContact={addContact}
        updateContact={updateContact}
        clearCurrent={clearCurrent}
        setConclusion={setConclusion}
        conclusion={conclusion}
        setContact={setContact}
        clearAll={clearAll}
        clearSingleState={clearSingleState}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </Fragment>
  );
};
export default ContactForm;
