import React from 'react';
import Banar from './Banar/Banar';
import Contact from './Contact/Contact';
import Info from './Info/info'
import MakeAppointment from './MakeAppoinment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
          <Banar> </Banar>
          <Info></Info>
          <Services> </Services>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </div>
    );
};

export default Home;