import React, { useReducer } from "react";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  CLEAR_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";
import fetcher from "../../api/fetcher";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    numOfContacts: null,
    current: null,
    filterd: null,
    error: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // get contacts
  const getConacts = async () => {
    const config = {
      headers: {
        "x-auth-token": `${localStorage.token}`,
      },
    };
    try {
      const res = await fetcher.get("/contacts", config);
      dispatch({ type: GET_CONTACTS, payload: res.data.contacts });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Add contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.token}`,
      },
    };
    try {
      const res = await fetcher.post("/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  // Delete Contact
  const deleteContact = async (id) => {
    const config = {
      headers: {
        "x-auth-token": `${localStorage.token}`,
      },
    };
    try {
      await fetcher.delete(`/contacts/${id}`, config);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateContact = async (contact) => {
    console.log(contact);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.token}`,
      },
    };
    try {
      const res = await fetcher.put(
        `/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  // clear Filter
  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        numOfContacts: state.numOfContacts,
        current: state.current,
        filterd: state.filterd,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getConacts,
        clearContacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};
export default ContactState;
