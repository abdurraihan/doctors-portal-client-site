import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
const BookingModal = ({treatment , date , setTreatment}) => {

  const [user] = useAuthState(auth);

    const { _id , name ,slots} = treatment;

    const handleBooking = event =>{
        event.preventDefault();
       const slot = event.target.slot.value;
       console.log( _id , name , slot)

       setTreatment(null)
    }

    return (

       <div>
            
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
       
          <div className="modal-box">
            <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
            
            <div className="modal-action">
           
              <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
           
            </div>

            <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-3' > 
            <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

            <select name="slot" className="select select-bordered w-full max-w-xs">
            {
                slots.map((slot, index)=> <option key={index} value={slot}> {slot}</option>)
            }

            </select>

            <input  type="text" name='name' disabled value={user?.displayName || ''} placeholder=" your name" className="input input-bordered w-full max-w-xs" />

            <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />

            <input type="number" name='phone' placeholder=" Phone Number" className="input input-bordered w-full max-w-xs" />

            <input type="submit" value='submit' className="input input-bordered w-full max-w-xs bg-secondary" />

            </form>


          </div>
        </div>
       </div>
    );
};

export default BookingModal;