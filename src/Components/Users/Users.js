import React from 'react';
import {useQuery} from "react-query";
import Loading from "../Loading/Loading"
import UserRow from '../UserRow/UserRow';

const Users = () => {
    const {data: users, isLoading} = useQuery("users", () => fetch("http://localhost:5000/users").then(res => res.json()))

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user, index) =><UserRow
                       index={index}
                       key={user._id}
                       user={user}
                       ></UserRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;