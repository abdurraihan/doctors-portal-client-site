import React from 'react';
import bg from '../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Shared/NaveBar/PrimaryBtn';
const Contact = () => {
    return (
        <section className='mx-auto text-center' style={{background: `url(${bg})`}} >
         <div>
         <p className='text-primary text-2xl font-bold '>contact us</p>
           <h2 className='text-white text-4xl '>Stay Connected With us </h2>

         </div>
          
          <form className='my-4'>
               <input className='w-[25%] rounded-md my-2' type="email" name='address' placeholder='Email Address'  />
               <br />
               <input className='w-[25%]  rounded-md my-2' type="text" name='Subject' placeholder='Email Address' />

               <br />
               <textarea  className='w-[25%] h-[100px] rounded-md' placeholder='your message'  name="" id="" cols="30" rows="10"></textarea>
               <br />
               
               <PrimaryBtn>Submit</PrimaryBtn>
        
           </form>
          
        </section>
       
    );
};

export default Contact;