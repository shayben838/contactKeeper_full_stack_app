import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import CommentItem from "./CommentItem";
import PreservationAndImprovement from "./PreservationAndImprovement";

const ContactItem = ({ contact }) => {
  const [commentComponent, setCommentComponent] = useState("");
  const [PreservationComponent, setPreservationComponent] = useState("");

  const contactContext = useContext(ContactContext);
  const {
    _id,
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
    phone,
    type,
    date,
  } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDelete = () => {
    let answer = window.confirm("Delete this contact?");
    if (answer) {
      deleteContact(_id);
      clearCurrent();
    }
  };
  let dateArr = date.split("T")[0];
  dateArr = dateArr.split("-");
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
      <span
        style={{
          fontSize: "14px",
          position: "absolute",
          top: "8px",
          right: "15px",
        }}
      >
        {dateArr[2]}
        {"/"}
        {dateArr[1]}
        {"/"}
        {dateArr[0]}
      </span>
      <ul className='list'>
        {position && (
          <li>
            <i className='fab fa-product-hunt'> </i>
            <span className='contact_item_text'>{position}</span>
          </li>
        )}
        {email && (
          <li>
            <i className='fas fa-envelope-open'> </i>
            <span className='contact_item_text'>{email}</span>
          </li>
        )}
        {firstInterview && (
          <li>
            <i className='fas fa-check '></i>
            <span className='contact_item_text'>
              {"Invited for first interview"}
            </span>
          </li>
        )}
        {secondInterview && (
          <li>
            <i className='fas fa-check'></i>
            <span className='contact_item_text'>
              {"Invited for second interview"}
            </span>
          </li>
        )}
        {!firstInterview && (
          <li>
            <i className='fas fa-times'></i>
            <span className='contact_item_text'>
              {"Invited for first interview"}
            </span>
          </li>
        )}
        {!secondInterview && (
          <li>
            <i className='fas fa-times'></i>
            <span className='contact_item_text'>
              {"Invited for second interview"}
            </span>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'>{("  ", phone)}</i>
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          href='#'
          onClick={() => setCurrent(contact)}
        >
          {/*eslint-disable-next-line */}
          <a style={{ color: "white" }} href='#'>
            {" "}
            Edit
          </a>
        </button>

        <button className='btn btn-danger btn-sm ' onClick={onDelete}>
          Delete
        </button>
        {comments && (
          <button
            className='btn btn-white btn-sm '
            onClick={() => {
              commentComponent
                ? setCommentComponent("")
                : setCommentComponent("show comments");
            }}
          >
            Comments
            {commentComponent && <i className='fas fa-chevron-up'></i>}
            {!commentComponent && <i className='fas fa-chevron-down'></i>}
          </button>
        )}

        {(conservationPoint_1 ||
          conservationPoint_2 ||
          pointToImprove_1 ||
          pointToImprove_2) && (
          <button
            className='btn btn-white btn-sm '
            onClick={() => {
              PreservationComponent
                ? setPreservationComponent("")
                : setPreservationComponent("show PreservationAndImprovement");
            }}
          >
            <i className='fas fa-car-battery'></i>
            {PreservationComponent && <i className='fas fa-chevron-up'></i>}
            {!PreservationComponent && <i className='fas fa-chevron-down'></i>}
          </button>
        )}
        {commentComponent && <CommentItem comments={comments} />}
        {PreservationComponent && (
          <PreservationAndImprovement
            pointToImprove_2={pointToImprove_2}
            pointToImprove_1={pointToImprove_1}
            conservationPoint_2={conservationPoint_2}
            conservationPoint_1={conservationPoint_1}
          />
        )}
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
};

export default ContactItem;
