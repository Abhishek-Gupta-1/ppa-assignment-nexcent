"use client";
import React from 'react'
import Image from 'next/image';
import { CommunityData } from '@/data/Community';

const Community = () => {
    return (

        <section className="py-12 bg-gray-300">
            <h2 className="text-3xl font-bold text-center ">Manage your entire community <span className='block'>in a single system</span></h2>
            <p className="mt-2 text-center dark:text-gray-200">Who is Nextcent suitable for?</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-24 md:gap-10 gap-y-8 mt-8 mx-24 md:px-4">

                {CommunityData.map((data) => (

                    <div key={data.title}>
                        <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 p-6 shadow rounded-lg text-center">
                            <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                                <Image src={data.image} alt="Icon 1" width={32} height={32} />
                            </div>
                            <h3 className="text-xl font-semibold">{data.title}</h3>
                            <p className="mt-2 ">{data.detail}</p>
                        </div>
                    </div>

                ))}

            </div>
        </section>
    )
}

export default Community

