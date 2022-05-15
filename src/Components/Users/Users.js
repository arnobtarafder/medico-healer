import React from 'react';
import {useQuery} from "react-query";
import Loading from "../Loading/Loading"

const Users = () => {
    const {data: users, isLoading} = useQuery("users", () => fetch("http://localhost:5000/users").then(res => res.json()))

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1>All Users: {users.length}</h1>
        </div>
    );
};

export default Users;