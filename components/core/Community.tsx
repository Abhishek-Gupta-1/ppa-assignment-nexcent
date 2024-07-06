"use client";
import React from 'react'
import Image from 'next/image';
import { CommunityData } from '@/data/Community';

const Community = () => {
    return (

        <section className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center ">Manage your entire community <span className='block'>in a single system</span></h2>
            <p className="mt-2 text-center text-gray-600">Who is Nextcent suitable for?</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-8 mx-24 md:px-0">

                {CommunityData.map((data) => (

                    <div key={data.title}>
                        <div className="bg-white p-6 shadow rounded-lg text-center">
                            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                                <Image src={data.image} alt="Icon 1" width={32} height={32} />
                            </div>
                            <h3 className="text-xl font-semibold">{data.title}</h3>
                            <p className="mt-2 text-gray-600">{data.detail}</p>
                        </div>
                    </div>

                ))}

            </div>
        </section>
    )
}

export default Community