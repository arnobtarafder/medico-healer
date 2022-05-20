import React from 'react';

const DoctorRow = ({doctor, index}) => {
    const {name, specialty} = doctor;

    return (
            <tr>
                <td>{index + 1}</td>
                <td>Avatar</td>
                <td>{name}</td>
                <td>{specialty}</td>
                <td><button className='btn btn-xs btn-error'>Delete</button></td>
            </tr>
    );
};

export default DoctorRow;