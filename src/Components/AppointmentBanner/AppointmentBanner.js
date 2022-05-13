import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import background from "../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({date, setDate}) => {

    return (
        <section style={{
            background: `url(${background})`
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mr-24'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;