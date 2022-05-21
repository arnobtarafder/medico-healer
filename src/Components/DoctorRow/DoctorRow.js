import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;

    const handleDelete = (email) => {
        Swal.fire({
            text: "Are you sure you want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.value) {
                fetch(`https://medico-healer.herokuapp.com/doctors/${email}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`

                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged || data.deleteCount) {
                            toast.success(`Doctor: ${name} is deleted`)
                            refetch();
                        }
                    });
            }
        });
    };



    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;