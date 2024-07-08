import React from 'react';

export const SubFooter = () => {
    return (
        <div className="py-12 flex flex-col items-center justify-center h-80 bg-gray-100 dark:bg-gray-900">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-center mb-4 text-black dark:text-white">Pellentesque suscipit <span className='block'>fringilla libero eu.</span></h1>
            <button className="mt-8 bg-[#4CAF4F] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-sm  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                Get a Demo →
            </button>
        </div>
    );
};

