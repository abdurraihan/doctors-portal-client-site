import React from 'react';

const Reviw = ({ review }) => {
    const { name, reviw, img , location} = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviw}</p>
                <div className='flex px-2'>

                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                    <div>
                    <h2 className="card-title px-2">{name}</h2> 
                        <p className='px-2 font-bold'> {location}</p> 
                        
                     </div>
                      
                </div>


                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default Reviw;