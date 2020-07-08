import React from "react";

const Contactconclusion = ({
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
  return (
    <div>
      <div>
        <button
          style={{ width: "100%" }}
          type='button'
          className='btn btn-white btn-sm '
          onClick={() => {
            conclusion ? setConclusion("") : setConclusion("show conclusion");
          }}
        >
          Conclusions
          {conclusion && <i className='fas fa-chevron-up'></i>}
          {!conclusion && <i className='fas fa-chevron-down'></i>}
        </button>
      </div>
      {conclusion && (
        <div>
          <h5>Interviews</h5>
          <div className='grid-2' style={{ gridGap: "0rem" }}>
            <div>
              <input
                type='checkbox'
                name='firstInterview'
                value={"invieted_for_first_intreview"}
                checked={firstInterview === "invieted_for_first_intreview"}
                onChange={onChange}
              />
              <span className='m'>First intreview</span>
              <i
                className='fas fa-times times_form'
                onClick={() => clearSingleState("firstInterview")}
              ></i>
            </div>
            <div>
              <input
                type='checkbox'
                name='secondInterview'
                value='invieted_for_second_intreview'
                checked={secondInterview === "invieted_for_second_intreview"}
                onChange={onChange}
              />
              <span className='m'>Second interview</span>
              <i
                className='fas fa-times times_form'
                onClick={() => clearSingleState("secondInterview")}
              ></i>
            </div>
          </div>
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
        </div>
      )}
    </div>
  );
};
export default Contactconclusion;
