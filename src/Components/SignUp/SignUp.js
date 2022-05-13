import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import auth from "../../firebase.init";
import Loading from '../Loading/Loading';


const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    let signInError;

    if (googleLoading || loading) {
        return <Loading />
    }

    if (googleError || error || updateError) {
        signInError = <small className='text-red-500'>{googleError?.message || updateError?.message || error?.message}</small>
    }

    if (googleUser || user) {
        console.log(googleUser);
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
        console.log("update done");
        navigate("/appointment")
    };



    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === "required" &&
                                    <span className='label-text-alt text-red-500'>{errors.name?.message}</span>}
                            </label>
                        </div>


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

                        <input className='btn w-full max-w-xs font-bold hover:tracking-wide text-white' type="submit" value="Sign Up" />
                    </form>

                    <small className='text-center'>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></small>

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

export default SignUp;