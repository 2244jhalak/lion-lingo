"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import WelcomeImg from "../../../public/Welcome.png"
import Flag from "react-world-flags";
import { useRouter } from 'next/navigation';

const Welcome = () => {

    const router = useRouter();

    useEffect(() => {
    // 3 সেকেন্ড পর Login পেজে রিডিরেক্ট হবে
    const timer = setTimeout(() => {
      router.push("/signup");
    }, 3000);

    // ক্লিনআপ টাইমার
    return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-[#FFD57B]'>
            <div className='flex items-center gap-10'>
                <Flag className='animate-bounce rounded-full' code="GB" style={{ width: "50px", height: "50px" }}  />
               
                <Flag className='animate-bounce rounded-full' code="JP" style={{ width: "50px", height: "50px" }} />
            </div>
            <div className=''>
                <Image className='h-40 w-40' src={WelcomeImg} alt='' height={500} width={500}></Image>
            </div>
            <div className='flex items-center'>
                
                <h3 className='text-[#AD6339] font-semibold text-2xl mx-5'>Welcome To LionLingo</h3>
                
            </div>
           

        </div>
    );
};

export default Welcome;