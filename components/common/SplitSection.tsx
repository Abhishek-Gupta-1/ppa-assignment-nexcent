import React from 'react';
import Image from 'next/image';

interface SplitSectionProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    buttonText: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({ imageSrc, imageAlt, title, description, buttonText }) => {
    return (
        <section className="py-12 mx-4 md:mx-16 lg:mx-32 xl:mx-64 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
                <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 dark:text-gray-100">{description}</p>
                <button className="mt-6 px-6 py-2 text-white bg-[#4CAF4F] hover:bg-green-700 rounded-sm">
                    {buttonText}
                </button>
            </div>
        </section>

    );
};

export default SplitSection;
