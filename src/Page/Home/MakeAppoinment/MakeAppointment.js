import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Shared/NaveBar/PrimaryBtn';
const MakeAppointment = () => {
    return (
       <section style={{background: `url(${appointment})`}}
       className='flex justify-center items-center my-28'
       
       >
           <div className='flex-1 hidden lg:block'>
                <img className='mt-[-160px]' src={doctor} alt="" />
           </div>
           <div className='flex-1'>
               <h3 className='text-3xl text-primary text-white'> Appointment</h3>
               <h4 className='text-4xl text-white py-2'>Make an appointment Today</h4>
               <p className='text-white pb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit error eius nihil hic at excepturi consectetur! Mollitia sed a, saepe laudantium temporibus facilis. Vitae quibusdam quis iusto quasi sed rerum?</p>

                <PrimaryBtn>Get Start</PrimaryBtn>
           </div>
       </section>
    );
};

export default MakeAppointment;