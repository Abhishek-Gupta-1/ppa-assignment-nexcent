"use client";
import { Company, Support } from '@/data/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { deflate } from 'zlib';

const Footer = () => {
    return (

        <div className='relative flex flex-col md:flex-row justify-around md:gap-5 w-full  p-5 text-white  pb-[60px] bg-[#263238]'>

            <div className=' flex flex-col justify-between '>
                <div className=' flex flex-col md:p-5 justify-between '>
                    <div className='flex gap-2 items-center '>

                        <Image alt='logo' width={100} height={80} src='/footer/footer-logo.png' className='h-8 w-44' />
                    </div>
                    <div className=' mt-5'>
                    </div>
                    <p className='absolute md:static  left-0 bottom-0 text-sm font-semibold my-3 ml-3 md:ml-0 pb-[30px]'>Copyright &#9400; 2020 Nexcent ltd. All rights reverved</p>
                </div>
            </div>

            <div className='grid grid-cols-2 align-items-center gap-20 p-5 space-x-20 w-2/6'>
               
               
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-2xl pb-6'>Company</h1>
                    <div className='flex flex-col justify-evenly h-full gap-y-3'>
                        {
                            Company.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col '>
                    <p className='font-semibold text-2xl pb-6'>Support</p>
                    <div className='flex flex-col justify-evenly h-full gap-y-3'>
                        {
                            Support.map((link) => (
                                <Link key={link.href} href={link.href} target='_blank'>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>



            </div>
        </div>



    )
}

export default Footer;
