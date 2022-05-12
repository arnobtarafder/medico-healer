import React from 'react';
import contact from "../../assets/images/login.png"
import PrimaryButton from '../../Pages/Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='' style={{
            background: `url(${contact})`
        }}>
            <div class="hero-overlay bg-opacity-60 py-16 ">
                <div class=""></div>
                <div class="mx-w-lg text-center text-neutral-content">
                    <div class="">
                        <h4 class="text-xl text-primary font-bold">Contact Us</h4>
                        <h2 class="mb-5 text-3xl">Stay Connected With Us</h2>
                      
                        <div class="form-control max-w-md mx-auto">

                            <input type="text" placeholder="Email Address" class="input input-bordered max-w-75 my-4" />

                            <input type="text" placeholder="Subject" class="input input-bordered" />

                            <textarea class="textarea my-4 h-36" placeholder="Your message"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                </div>
            </div>
        </div>
        </section >
    );
};

export default ContactForm;