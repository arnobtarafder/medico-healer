import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import "./HomeAppointmentBanner.css";

const AppointmentBanner = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-16'>
            <div className='flex-1 hidden md:block lg:block appointment-banner'>
                <img className="image-full" src={doctor} alt="physicist" />
            </div>

            <div className='flex-1 px-7 lg:px-0 py-12 text-white'>
                <h3 className="text-xl text-primary py-4 uppercase font-bold">Appointment</h3>

                <h3 className="text-3xl">
                    Make an Appointment <br /> Today</h3>

                <p className='py-4'>You will now get all kinds of health related services for your day to day life through an app. Ranging from primary health care for your illness to specialist doctors’ consultation or referrals for hospital admission.</p>

                <PrimaryButton>Appointment Now</PrimaryButton>
            </div>
        </section>
    );
};

export default AppointmentBanner;