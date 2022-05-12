import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../../Components/AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};

export default Appointment;