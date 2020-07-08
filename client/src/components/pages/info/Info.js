import React, { useEffect, useContext } from "react";
import ContactContext from "../../../context/contact/contactContext";
import AuthContext from "../../../context/auth/authContext";
import { calculateNumbers } from "./statistics";
import "./info.css";

const Info = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { contacts, loading } = contactContext;
  useEffect(() => {
    authContext.loadUser();
    contactContext.getConacts();
    // eslint-disable-next-line
  }, []);
  let dataStatistics = {
    first: 0,
    second: 0,
    companies: [],
    preservation: [],
    improvement: [],
  };

  if (contacts !== null && !loading) {
    dataStatistics = calculateNumbers(contacts, loading);
  }
  const {
    first,
    second,
    companies,
    preservation,
    improvement,
  } = dataStatistics;

  return (
    <div className='Info_component '>
      {contacts !== null && !loading && (
        <div className='p-rel'>
          <h1 className='text-center lead p-1 '>Information Center</h1>
          {/* information */}
          <div className='container grid-2'>
            <div>
              <h2 className='m-1'>Numbers </h2>
              <div>
                <i className='fas fa-info m-1'></i>
                <span>
                  {`Total applied jobs `}
                  <span
                    className={
                      contacts.length === 0 ? "danger large" : "primary large"
                    }
                  >
                    {contacts.length}
                  </span>
                </span>
              </div>
              <div>
                <i className='fas fa-info m-1'></i>
                <span>
                  {`You invited to `}
                  <span
                    className={first === 0 ? "danger large" : "success large"}
                  >
                    {first}
                  </span>
                  <span>{" first Interviews"}</span>
                </span>
              </div>
              <div>
                <i className='fas fa-info m-1'></i>
                <span>
                  {`You invited to `}
                  <span
                    className={second === 0 ? "danger large" : "success large"}
                  >
                    {second}
                  </span>
                  <span>{" second Interviews"}</span>
                </span>
              </div>
            </div>
            {/* companies */}
            <div style={{ maxHeight: "325px", overflow: "auto" }}>
              <div className='text-center '>
                <h2 className='m-1'>Your CV send To </h2>
                <div className=' wrap_company_item'>
                  {companies.map((company) => {
                    return (
                      <div key={`${company} `}>
                        <p className={"company_item"}>{company}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* PROPS AND CONS */}
          <div className='container grid-2'>
            <div>
              <h2 className='success m-2'>Your Strengths</h2>
              {preservation.map((pres) => {
                return (
                  <p
                    key={preservation.indexOf(pres)}
                    className='p_PreservationAndImprovement_info success_border'
                  >
                    {pres}
                  </p>
                );
              })}
              {preservation.length === 0 && (
                <h4 className='text-center'>
                  Add preservation for your interviews.
                </h4>
              )}
            </div>
            <div>
              <h2 className='danger m-2'>Your Weaknesses</h2>
              {improvement.map((pres) => {
                return (
                  <p
                    key={improvement.indexOf(pres)}
                    className='p_PreservationAndImprovement_info danger_border '
                  >
                    {pres}
                  </p>
                );
              })}
              {improvement.length === 0 && (
                <h4 className='text-center'>
                  Add improvement for your interviews.
                </h4>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Info;
