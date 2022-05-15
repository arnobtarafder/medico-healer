import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const [users] = useAuthState(auth);

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{users?.displayName}</td>
            <td>{email}</td>
        </tr>
    );
};

export default UserRow;