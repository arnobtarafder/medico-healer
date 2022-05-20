import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const {data: appointment, isLoading} = useQuery(["booking", id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl text-purple-600">Please Pay for: {id}</h2>
        </div>
    );
};

export default Payment;