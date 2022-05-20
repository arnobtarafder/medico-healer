import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const {data: appointment} = useQuery(["booking", id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return (
        <div>
            <h2 className="text-2xl text-purple-600">Please Pay for: {id}</h2>
        </div>
    );
};

export default Payment;