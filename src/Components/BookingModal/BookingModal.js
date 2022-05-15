import { useAuthState } from 'react-firebase-hooks/auth';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import React from 'react';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, "PP")


    if (loading) {
        return <Loading />
    }


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value
        console.log(slot, _id, name);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user?.email,
            patientName: user.displayName,
            phone
        }

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.success);
                if (data.success) {
                    toast.success(`Appointment is set, ${formattedDate} at ${slot}`, {
                        theme: "colored"
                    })
                }
                else {
                    toast.error(`Already have an Appointment on, ${data.booking?.date} at ${slot}`, {
                        theme: "colored"
                    })
                }
                refetch();
                // TO CLOSE THE MODAL
                setTreatment(null)
            })
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
                                slots.map((slot, index) => <option
                                    key={index}
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