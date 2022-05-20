import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deleteCount) {
                toast.success(`Doctor: ${name} is deleted`)
                refetch();
            }
        })
    }

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