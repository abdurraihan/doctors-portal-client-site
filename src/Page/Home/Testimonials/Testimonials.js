import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import Reviw from './Reviw/Reviw';
const Testimonials = () => {

    const reviws = [
        {
            _id:1,
            name: 'Winson Heary',
            reviw: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole1,
            location:'usa'
        },
        {
            _id:2,
            name: 'Winson Heary',
            reviw: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole2,
            location:'india'
        },
        {
            _id:3,
            name: 'Winson Heary',
            reviw: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole3,
            location:'bangladesh'
        }
       
    ]


    return (
      <section>

        <div className='flex justify-between '>
                
          <div >
              <div><h4 className="text-xl text-primary font-bold ">Testimonial</h4></div>
              <div className='text-3xl'>What our patients say</div>
          </div>

              
              <div>
                <img className='lg:w-48 w-24' src={quote} alt="" />
              </div>
         </div>

            <div className=' grid  grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        reviws.map(review=> <Reviw key={review._id} review={review}></Reviw>)
                    }
            </div>

      </section>
    );
};

export default Testimonials;