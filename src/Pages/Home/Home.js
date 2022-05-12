import React from 'react';
import HomeAppointmentBanner from '../../Components/HomeAppointmentBanner/HomeAppointmentBanner';
import Banner from '../../Components/Banner/Banner';
import Information from '../../Components/Information/Information';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Reviews/Testimonials/Testimonials';
import ContactForm from '../../Components/ContactForm/ContactForm';

const Home = () => {
    return (
        <section>
            <div className='px-12'>
                <Banner />
                <Information />
                <Services />
            </div>

            <div>
                <HomeAppointmentBanner className="px-0 mx-0" />
                <Testimonials />
                <ContactForm />
            </div>

            <div className='pb-0'>
                {/* <Footer /> */}
            </div>

        </section>
    );
};

export default Home;