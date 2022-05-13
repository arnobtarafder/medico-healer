import React from 'react';
import contact from "../../assets/images/login.png"
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='' style={{
            background: `url(${contact})`
        }}>
            <div className="hero-overlay bg-opacity-60 py-16">
                <div className=""></div>
                <div className="mx-w-lg text-center text-neutral-content">
                    <div className="">
                        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
                        <h2 className="mb-5 text-3xl">Stay Connected With Us</h2>

                        <div className="form-control max-w-md mx-auto">

                            <input type="text" placeholder="Email Address" className="input input-bordered max-w-75 my-4" />

                            <input type="text" placeholder="Subject" className="input input-bordered" />

                            <textarea className="textarea my-4 h-36" placeholder="Your message"></textarea>
                        </div>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactForm;