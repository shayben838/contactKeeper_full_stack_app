import React, { useContext } from "react";
import propTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { _id, name, email, phone, type } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'> {name} </h3>

      <span
        style={{ float: "right" }}
        className={
          "badge " +
          (type === "professional" ? "badge-success" : "badge-primary")
        }
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'>{email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'>{phone}</i>
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm ' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
};

export default ContactItem;
