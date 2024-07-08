import React from 'react';
import Image from 'next/image';
import { CommunityUpdateData } from '@/data/CommunityUpdateData';

const CommunityUpdate = () => {
    return (
        <section className="py-12 text-center pb-32">
            <h2 className="text-4xl font-bold">Caring is the new marketing</h2>
            <p className="mt-2 dark:text-gray-200 max-w-xl mx-auto">
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who joining the community, read about how our community are increasing their membership income and lots more.
            </p>

            <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-6 gap-y-20  sm:mx-20 sm: ">
                {CommunityUpdateData.map((data) => (
                    <div key={data.id} className="relative ">
                        <div className="bg-white p-6 shadow rounded-lg py-16">
                            <Image src={data.image} alt={data.id} width={300} height={200} className="rounded-lg w-96" />
                        </div>
                        <div className="absolute top-56 left-10 right-10 -bottom-12 py-12 flex flex-col justify-center items-center bg-slate-100  rounded-lg p-4">
                            <h3 className="text-lg lg:text-xl font-bold text-center text-gray-800">{data.title}</h3>
                            <button className="mt-2 text-green-600 text-lg">
                                Read more →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommunityUpdate;

