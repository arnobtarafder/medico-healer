import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../../Components/AvailableAppointments/AvailableAppointments';


const queryClient = new QueryClient()


const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <QueryClientProvider client={queryClient}>
            <AvailableAppointments date={date} />
            </QueryClientProvider>

        </div>
    );
};

export default Appointment;