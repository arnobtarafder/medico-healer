import React from 'react';
import "./Loading.css"

const Loading = () => {
    return (
        <div class="h-screen flex items-center justify-center">
            <div class="w-16 h-16 border-b-2 border-gray-700 rounded-full animate-spin"></div>

            {/* <img src="https://cdn.dribbble.com/users/829077/screenshots/7816378/media/50531479d6e4213b13f13fd6d15178e3.gif" alt="" /> */}

            {/* <figure>
                <div class="dot four"></div>
                <div class="dot three"></div>
                <div class="dot two"></div>
                <div class="dot one"></div>
            </figure> */}
        </div>
    );
};

export default Loading;