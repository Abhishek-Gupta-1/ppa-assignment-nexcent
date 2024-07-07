"use client";
import React from 'react'
import Image from 'next/image'
import { ClientsData } from "@/data/ClientsData"

const Clients = () => {
    return (

        <section className="py-12">
            <h2 className="text-5xl font-bold text-center ">Our Clients</h2>
            <p className="mt-2 text-center text-lg dark:text-gray-200">We have been working with some Fortune 500+ clients</p>
            <div className='mx-12 px-12'>
                <div className="justify-center mt-8 overflow-hidden grid grid-cols-7 ">
                    {ClientsData.map((data) => (
                        <Image key={data.alt} src={data.src} alt={data.alt} width={50} height={50} className='mx-8' />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Clients;

