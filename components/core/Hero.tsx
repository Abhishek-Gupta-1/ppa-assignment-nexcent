"use client";
import React from 'react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-pretty">
                <h1 className="text-5xl font-bold text-gray-700">
                    Lessons and insights
                    <span className="block text-green-500">from 8 years</span>
                </h1>
                <p className="mt-4 text-gray-600 text-sm">
                    Where to grow your business as a photographer: site or social media?
                </p>
                <button className="mt-6 px-6 py-2 text-white bg-green-500 rounded-sm">
                    Register
                </button>
            </div>
            <div className="ml-16">
                <Image src="/hero/illustration1.png" alt="Illustration" width={400} height={400} />
            </div>
        </div>
    );
};

