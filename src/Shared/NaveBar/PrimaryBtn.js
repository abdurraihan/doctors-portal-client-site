import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-primary to-secondary ">{children}</button>
        </div>
    );
};

export default PrimaryBtn;