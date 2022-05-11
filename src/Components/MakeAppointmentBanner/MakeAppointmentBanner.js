import React from 'react';
import doctor from "../../assets/images/doctor.png"

const MakeAppointmentBanner = () => {
    return (
        <section className='flex'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className="text-xl text-primary">Appoinment</h3>
                <h3 className="text-3xl">Make an Appointment Today</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta aperiam doloribus, hic officia ut numquam nostrum ea mollitia fugit sapiente at doloremque, cupiditate error tempora, iste corporis natus voluptates voluptatem totam ullam a qui esse! Placeat eligendi ab sequi autem, voluptatibus soluta asperiores ea sunt dolorum, molestiae rem. Suscipit unde laborum fuga magnam? Cum similique quia libero tempore voluptatum quae sit. Maxime libero maiores rerum officia officiis facilis, minima fugit?</p>
            </div>
        </section>
    );
};

export default MakeAppointmentBanner;