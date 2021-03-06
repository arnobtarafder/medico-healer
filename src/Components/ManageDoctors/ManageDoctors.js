import React from 'react';
import { useQuery } from 'react-query';
import DoctorRow from '../DoctorRow/DoctorRow';
import Loading from '../Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () => fetch("https://medico-healer.herokuapp.com/doctors", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            >

                            </DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;