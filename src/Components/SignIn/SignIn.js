import React from 'react';
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if(googleUser){
        console.log(googleUser);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <div className="divider">Or</div>

                    <button 
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline'>
                        Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;