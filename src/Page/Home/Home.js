import React from 'react';
import Banar from './Banar/Banar';
import Contact from './Contact/Contact';
import Info from './Info/info'
import MakeAppointment from './MakeAppoinment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Footet from '../../Shared/Footet';
const Home = () => {
    return (
        <div className='px-12'>
          <Banar> </Banar>
          <Info></Info>
          <Services> </Services>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footet></Footet>
        </div>
    );
};

export default Home;