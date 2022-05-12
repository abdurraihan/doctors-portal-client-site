import React from 'react';

const InfoCard = ({img , cardTitle , bg}) => {
    return (

        <div className={`card card-side text-white bg-accent shadow-xl ${bg}`}>
  <figure className='pl-3'><img src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>

       
    );
};

export default InfoCard;