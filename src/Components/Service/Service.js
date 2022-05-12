import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                    <div class="card-actions justify-end">
                        <label
                            for="booking-modal"
                            class="btn btn-secondary text-white uppercase"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}>Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;