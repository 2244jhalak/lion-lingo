"use client"
import React from 'react';
import Img from "../../../public/Login-Signup.png"
import Image from 'next/image';
import { FaCloudDownloadAlt, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='h-screen mt-10 space-y-5'>
            <h2 className='text-center text-3xl font-semibold text-[#AD6339] mb-10'>Login</h2>
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <Image src={Img} className='h-[400px] w-full' alt='' height={500} width={500} />
                </div>
                <div className='w-1/2'>
                    <form className='flex flex-col gap-y-5'>
                        <div className='relative'>
                            <input type="text" className='bg-[#FAFAFA] w-96 h-10 rounded ps-14' placeholder="Email" />
                            <div className="absolute bottom-3.5">
                               <FaEnvelope  className='text-gray-400 ms-5' />
                            </div>
                        </div>
                        <div className='relative'>
                            <input type="text" className='bg-[#FAFAFA] w-96 h-10 rounded ps-14' placeholder="Password" />
                            <div className="absolute bottom-3.5">
                               <FaLock  className='text-gray-400 ms-5' />
                            </div>
                        </div>
                        <input className='text-center cursor-pointer rounded-3xl py-2.5 bg-[#F2C600] text-white font-thin w-96' type="submit" value="Login" />
                        <p className='w-96 text-center font-semibold'>Create An Account? Please <Link href ="/signup" className='text-[#F2C600]'>Signup</Link></p>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;