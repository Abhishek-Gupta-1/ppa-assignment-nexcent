import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import Image from 'next/image';
import { HeroData } from '@/data/CarouselData';

export const Hero = () => {
    return (
        <AwesomeSlider animation="foldOutAnimation" className="h-[37rem] w-full">
            {HeroData.map((data) => (
                <div
                    key={data.id}
                    className={`min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center ${data.bgColor} p-4 lg:p-0`}
                >
                    <div className="text-pretty lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                            {data.title}
                            <span className="block text-green-500">{data.subtitle}</span>
                        </h1>
                        <p className="mt-4 text-xs md:text-sm lg:text-base">
                            {data.description}
                        </p>
                        <button className={`mt-6 px-4 md:px-6 py-2 ${data.buttonColor} rounded-sm`}>
                            {data.buttonText}
                        </button>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-16">
                        <Image src={data.imageSrc} alt={data.imageAlt} width={400} height={400} />
                    </div>
                </div>
            ))}
        </AwesomeSlider>
    );
};

