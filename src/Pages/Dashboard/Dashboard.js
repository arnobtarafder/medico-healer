import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <h2 className='text-2xl text-primary pb-8 pl-6'>Dashboard</h2>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-gradient-to-t from-secondary to-primary text-white font-medium">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/reviews">My Reviews</Link></li>
                        <li><Link to="/dashboard/history">My History</Link></li>
                        {admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;