import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Loading/Loading';
import Service from '../Service/Service';



const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () => 
        fetch(`https://medico-healer.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`https://medico-healer.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])


    
    return (
        <div className='mx-12 my-16'>
            <h4 className='text-3xl text-secondary text-center mb-7'>Available appointments on: {format(date, "PP")}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Service>)
                    }
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                refetch={refetch}
                setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppointments;