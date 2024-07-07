import React from 'react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 lg:p-0">
            <div className="text-pretty text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Lessons and insights
                    <span className="block text-green-500">from 8 years</span>
                </h1>
                <p className="mt-4 text-xs md:text-sm lg:text-base">
                    Where to grow your business as a photographer: site or social media?
                </p>
                <button className="mt-6 px-4 md:px-6 py-2 bg-green-500 rounded-sm">
                    Register
                </button>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-16">
                <Image src="/hero/illustration1.png" alt="Illustration" width={400} height={400} />
            </div>
        </div>
    );
};
