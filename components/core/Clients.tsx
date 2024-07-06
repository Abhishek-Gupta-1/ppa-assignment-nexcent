"use client";
import React from 'react'
import Image from 'next/image'
import { ClientsData } from "@/data/ClientsData"

export const Clients = () => {
    return (
        
            <section className="py-12">
                <h2 className="text-5xl font-bold text-center text-gray-700">Our Clients</h2>
                <p className="mt-2 text-center text-gray-600 text-lg">We have been working with some Fortune 500+ clients</p>
                <div className="flex justify-center space-x-40 mt-8">
                    {ClientsData.map((data) => (
                        <Image key={data.alt} src={data.src} alt={data.alt} width={50} height={50} />
                    ))}
                </div>
            </section>
        
    )
}

