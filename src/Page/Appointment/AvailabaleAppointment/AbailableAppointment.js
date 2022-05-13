import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal';
import Service from './Service/Service';

const AbailableAppointment = ({date}) => {
    const [services , setService] = useState([]);
    const [treatment , setTreatment] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'> Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    services.map(service=><Service key={service._id} service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment} ></BookingModal>}
        </div>
    );
};

export default AbailableAppointment;