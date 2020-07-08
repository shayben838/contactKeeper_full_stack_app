import React from "react";
import ContactConclusion from "./ContactConclusion";
const ContactInner = ({
  contact,
  setConclusion,
  conclusion,
  setContact,
  clearAll,
  clearSingleState,
  onSubmit,
  onChange,
  addContact,
  updateContact,
  current,
  clearCurrent,
}) => {
  const { name, email, position, link, type } = contact;
  return (
    <form id='contactForm' onSubmit={onSubmit}>
      <h2 className='text-primary '>{current ? "Edit Memo" : "Add Memo"}</h2>
      <input
        type='text'
        placeholder='Position'
        name='position'
        value={position}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Link '
        name='link'
        value={link}
        onChange={onChange}
      />
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
      />
      {/* START */}
      <ContactConclusion
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
      {/* END */}
      <h5>Memo Type</h5>
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
          value={current ? "Update Memo " : "Add Memo "}
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
export default ContactInner;
