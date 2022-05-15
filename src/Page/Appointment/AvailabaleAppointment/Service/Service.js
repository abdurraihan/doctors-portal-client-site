import React from 'react';

const Service = ({service , setTreatment}) => {
    const {name , slots} = service;
    return (
        <div className="card lg:mex-width-lg bg-base-100 shadow-xl">
        <div className="card-body  ">
          <h2 className="card-title text-xl text-secondary">{name}</h2>

          {
              slots.length ?  <small>{slots[0]}</small> : <small className='text-red-500'>Try another date.</small>
          }


          {
              slots.length < 1 ? <small>{slots.length} spaces available</small> : <small> {slots.length} space available</small>
          }
          <div className="card-actions justify-center">
          
          {/* Book btn */}
          <label className="btn btn-secondary  modal-button"  onClick={ () => setTreatment(service)}  disabled={slots.length === 0}  htmlFor="booking-modal" >Book Appointment</label>

           
          </div>
        </div>
      </div>
    );
};

export default Service;