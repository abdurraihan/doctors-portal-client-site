import React, { useState } from 'react';
import Footet from '../../Shared/Footet';
import AppointBanar from './AppointBanar/AppointBanar';
import AbailableAppointment from './AvailabaleAppointment/AbailableAppointment';

const Appointment = () => {
    const [date , setDate] = useState(new Date())
    return (
        <div>
           
            <AppointBanar date={date} setDate={setDate}></AppointBanar>
            <AbailableAppointment date={date}> </AbailableAppointment>
            <Footet></Footet>
        </div>
    );
};

export default Appointment;