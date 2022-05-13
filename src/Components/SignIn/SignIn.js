import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);    
    const { register, handleSubmit, formState: { errors } } = useForm();

    let signInError;

    if(googleLoading || loading) {
        return <Loading />
    }

    if(googleError || error) {
        signInError = <small className='text-red-500'>{googleError?.message || error?.message}</small>
    }

    if (googleUser || user) {
        console.log(googleUser);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };



    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Address is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email Address"
                                    }
                                })}
                                />
                            <label class="label">
                                {errors.email?.type === "required" &&
                                 <span className='label-text-alt text-red-500'>{errors.email?.message}</span>}

                                {errors.email?.type === "pattern" &&
                                 <span className='label-text-alt text-red-500'>{errors.email?.message}</span>}
                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 characters or longer"
                                    }
                                })}
                                />


                            <label class="label">
                                {errors.password?.type === "required" &&
                                 <span className='label-text-alt text-red-500'>{errors.password?.message}</span>}

                                {errors.password?.type === "minLength" &&
                                 <span className='label-text-alt text-red-500'>{errors.password?.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <input className='btn w-full max-w-xs font-bold hover:tracking-widest text-white' type="submit" value="Login" />
                    </form>

                    <small className='text-center'>New to Medico Healer? <Link className='text-secondary' to="/registration">Create New Account</Link></small>

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