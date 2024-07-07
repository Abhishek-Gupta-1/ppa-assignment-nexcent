"use client";
import React from 'react';

export const SubFooter = () => {
    return (
        <div className="py-12 flex flex-col items-center justify-center h-80 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-center mb-4">Pellentesque suscipit <span className='block'>fringilla libero eu.</span></h1>
            <button className="mt-8 bg-green-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                Get a Demo →
            </button>
        </div>
    );
};

