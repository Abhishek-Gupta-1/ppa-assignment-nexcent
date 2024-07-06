import React from 'react';
import Image from 'next/image';
import { CommunityUpdateData } from '@/data/CommunityUpdateData';

const CommunityUpdate = () => {
    return (
        <section className="py-12 bg-gray-50 text-center pb-32">
            <h2 className="text-4xl font-bold">Caring is the new marketing</h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-40">
                {CommunityUpdateData.map((data) => (
                    <div key={data.id} className="relative ">
                        <div className="bg-white p-6 shadow rounded-lg py-12">
                            <Image src={data.image} alt={data.id} width={300} height={200} className="rounded-lg w-96" />
                        </div>
                        <div className="absolute top-56 left-10 right-10 -bottom-12 py-12 flex flex-col justify-center items-center bg-slate-100  rounded-lg p-4">
                            <h3 className="text-xl font-bold text-center text-gray-800">{data.title}</h3>
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
