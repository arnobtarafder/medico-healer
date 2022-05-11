import React from 'react';
import quote from "../../../assets/icons/quote.svg";
import person from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Cook Henry",
            review: "voluptatibus eaque dignissimos magnam excepturi neque, sapiente distinctio culpa expedita a earum repellendus aspernatur! Deleniti, at atque nisi architecto non repellendus rerum sit illo sint distinctio vero tenetur perspiciatis.",
            location: "Bangladesh",
            img: person,
        },
        {
            _id: 2,
            name: "Raymond Mande",
            review: "voluptatibus eaque dignissimos magnam excepturi neque, sapiente distinctio culpa expedita a earum repellendus aspernatur! Deleniti, at atque nisi architecto non repellendus rerum sit illo sint distinctio vero tenetur perspiciatis.",
            location: "Bangladesh",
            img: person2,
        },
        {
            _id: 3,
            name: "Daisy John",
            review: "voluptatibus eaque dignissimos magnam excepturi neque, sapiente distinctio culpa expedita a earum repellendus aspernatur! Deleniti, at atque nisi architecto non repellendus rerum sit illo sint distinctio vero tenetur perspiciatis.",
            location: "Bangladesh",
            img: person3,
        }
    ]

    return (
        <section className='my-32'>
            <div className='flex justify-between'>
                <div className=''>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say!</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;