import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary pb-8">Booking for: {name}</h3>

                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, "PP")} class="input input-bordered w-full max-w-xs" disabled />

                        {/* <input type="text" value={slots.length > 1 && slots[0]} class="input input-bordered w-full max-w-xs" disabled /> */}

                        <select name='slot' class="select select-ghost w-full max-w-xs">
                            {
                                slots.map(slot => <option
                                    value={slot}
                                >
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />

                        <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;