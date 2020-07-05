import React from "react";

const PreservationAndImprovement = ({
  pointToImprove_2,
  pointToImprove_1,
  conservationPoint_2,
  conservationPoint_1,
}) => {
  return (
    <div>
      <h5 style={{ marginBottom: "5px" }}>Conservation Points</h5>
      <p className='success p_PreservationAndImprovement'>
        {conservationPoint_1}
      </p>
      <p className='success p_PreservationAndImprovement'>
        {conservationPoint_2}
      </p>
      <h5 style={{ marginBottom: "5px" }}>Points To Improve</h5>

      <p className='danger p_PreservationAndImprovement'>{pointToImprove_1}</p>
      <p className='danger p_PreservationAndImprovement'>{pointToImprove_2}</p>
    </div>
  );
};

export default PreservationAndImprovement;
