import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import background from "../../assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())

    return (
        <section style={{
            background: `url(${background})`
        }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You have selected: {format(date, "PP")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;