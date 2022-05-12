import React from 'react';
import Service from '../Service/Service';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../Shared/NaveBar/PrimaryBtn';

const Services = () => {

    const services =[
        {
            _id:1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <> 
        <div className='my-20 text-center'>
            <h2 className='text-primary text-xl font-bold'> Our services </h2>
           <h3 className='font-bold text-4xl'>Services We Provide</h3>
        </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-5 '> 
        {
            services.map(service => <Service
                 key={service._id} 
                 service={service}
                 >

                 </Service>)
        }
           
    </div>

    {/* service card in down */}


    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={treatment} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <div className="card-actions justify-start"> 
   <PrimaryBtn>Get Start</PrimaryBtn>
    </div>
  </div>
</div>


        </>
    );
};

export default Services;