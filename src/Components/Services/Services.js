import React from 'react';
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from './Service/Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Treatment",
            description: "",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening Treatment",
            description: "",
            img: whitening,
        }
    ]

    return (
        <section className='my-32'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h3 className='text-4xl'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 mt-10'>
                {
                    services.map(service => <Service 
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;