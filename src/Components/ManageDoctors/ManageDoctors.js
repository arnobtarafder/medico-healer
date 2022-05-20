import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const {data: doctors, isLoading} = useQuery("doctors", () => fetch("", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));


    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;