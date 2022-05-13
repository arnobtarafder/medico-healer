import React from 'react';
import "./Loading.css"

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>

            {/* <img src="https://cdn.dribbble.com/users/829077/screenshots/7816378/media/50531479d6e4213b13f13fd6d15178e3.gif" alt="" /> */}

            {/* <figure className='loading-figure-google'>
                <div className="dot four"></div>
                <div className="dot three"></div>
                <div className="dot two"></div>
                <div className="dot one"></div>
            </figure> */}
        </div>
    );
};

export default Loading;