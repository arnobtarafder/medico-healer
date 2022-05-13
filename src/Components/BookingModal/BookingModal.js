import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary pb-8">Booking for: {name}</h3>

                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, "PP")} className="input input-bordered w-full max-w-xs" disabled />

                        {/* <input type="text" value={slots.length > 1 && slots[0]} className="input input-bordered w-full max-w-xs" disabled /> */}

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option
                                    key={slot._id}
                                    value={slot}
                                >
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input type="text" name='name' value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" disabled />

                        <input type="email" name='email' value={user?.email || ""} className="input input-bordered w-full max-w-xs" disabled />

                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;