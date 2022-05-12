import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
    <InfoCard bg="bg-gradient-to-r from-primary to-secondary" cardTitle="Opening Hours" img={clock}> </InfoCard>
    <InfoCard bg="bg-accent" cardTitle="Our Location"  img={phone}> </InfoCard>
    <InfoCard bg="bg-gradient-to-r from-primary to-secondary" cardTitle="Contact Us"  img={marker}> </InfoCard>

        </div>
    );
};

export default info;