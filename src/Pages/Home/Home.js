import React from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import Banner from '../../Components/Banner/Banner';
import Information from '../../Components/Information/Information';
import Services from '../../Components/Services/Services';
import Testimonials from '../../Components/Reviews/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';
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
                <AppointmentBanner className="px-0 mx-0" />
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