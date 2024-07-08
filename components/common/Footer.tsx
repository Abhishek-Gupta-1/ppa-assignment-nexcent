"use client";
import { Company, Support } from '@/data/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { images } from '@/data/Cdn'

const Footer = () => {
    return (

        <div className='relative flex flex-col md:flex-row justify-around md:gap-5 w-full p-5 text-white pb-[60px] bg-[#263238]'>

            <div className='flex flex-col justify-between'>
                <div className='flex flex-col md:p-5 justify-between'>
                    <div className='flex gap-2 items-center'>
                        <Image alt='logo' width={100} height={80} src={images.footer} className='h-8 w-44' />
                    </div>
                    <div className='mt-5'></div>
                    <p className='absolute md:static left-0 bottom-0 text-sm font-semibold my-3 ml-3 md:ml-0 pb-[30px]'>Copyright &#9400; 2020 Nexcent ltd. All rights reserved</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-[50%] mt-10 md:mt-0 text-center lg:text-left md:text-left'>

                <div className='flex flex-col'>
                    <h1 className='font-semibold text-xl md:text-2xl pb-6'>Company</h1>
                    <div className='flex flex-col justify-evenly h-full gap-y-2'>
                        {
                            Company.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col'>
                    <p className='font-semibold text-xl md:text-2xl pb-6'>Support</p>
                    <div className='flex flex-col justify-evenly h-full gap-y-2'>
                        {
                            Support.map((link) => (
                                <Link key={link.href} href={link.href} target='_blank'>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-semibold text-xl md:text-2xl pb-6'>Stay up to date</h1>
                    <input type="email" name="email" id="collected-date" placeholder='Your email address' className='bg-[#525b60] px-6 py-2 rounded-md text-white' />
                </div>
            </div>
        </div>


    )
}

export default Footer;
