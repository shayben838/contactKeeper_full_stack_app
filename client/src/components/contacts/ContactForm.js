import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

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
  const {
    name,
    email,
    position,
    firstInterview,
    secondInterview,
    comments,
    conservationPoint_1,
    conservationPoint_2,
    pointToImprove_1,
    pointToImprove_2,
    link,
    type,
  } = contact;

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
    <form id='contactForm' onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? "Edit Company" : "Add Company"}
      </h2>
      <input
        type='text'
        placeholder='Company name'
        name='name'
        value={name}
        onChange={onChange}
        required
      />
      <input
        type='email'
        placeholder='email CV sent to '
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        type='text'
        placeholder='Position'
        name='position'
        value={position}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Link to the Publisher'
        name='link'
        value={link}
        onChange={onChange}
      />
      <h5>Interviews</h5>
      <div>
        <input
          style={{ margin: "0px" }}
          type='checkbox'
          name='firstInterview'
          value={"invieted_for_first_intreview"}
          checked={firstInterview === "invieted_for_first_intreview"}
          onChange={onChange}
        />
        <span className='m'>invieted for first intreview</span>
        <i
          className='fas fa-times times_form'
          onClick={() => clearSingleState("firstInterview")}
        ></i>
      </div>
      <input
        type='checkbox'
        name='secondInterview'
        value='invieted_for_second_intreview'
        checked={secondInterview === "invieted_for_second_intreview"}
        onChange={onChange}
      />
      <span className='m'>invieted for second interview</span>
      <i
        className='fas fa-times times_form'
        onClick={() => clearSingleState("secondInterview")}
      ></i>
      {/* IMPROVMENT and preservation */}
      <h5>2 Conservation Points</h5>
      <input
        type='text'
        placeholder='#First-point '
        name='conservationPoint_1'
        value={conservationPoint_1}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='#Second-point '
        name='conservationPoint_2'
        value={conservationPoint_2}
        onChange={onChange}
      />
      <h5>2 Improvement points</h5>
      <input
        type='text'
        placeholder='#First-point '
        name='pointToImprove_1'
        value={pointToImprove_1}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='#Second-point '
        name='pointToImprove_2'
        value={pointToImprove_2}
        onChange={onChange}
      />
      <h5>Comments</h5>
      {/*Text AREA */}
      <textarea
        name='comments'
        className='text_area'
        placeholder='#'
        onChange={onChange}
        value={comments}
      ></textarea>
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div>
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn btn-primary '
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block ' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
export default ContactForm;
