"use client";
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Image from 'next/image';
import carouseldata from '@/data/CarouselData';

const Carousel = () => {
    return (
        <AwesomeSlider animation="foldOutAnimation" className="h-[37rem] w-full">
            {carouseldata.map((slide, index) => (
                <div key={index} className={`min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center ${slide.bgColor} p-4 lg:p-0`}>
                    <div className="text-pretty lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                            {slide.title}
                            <span className="block text-green-500">{slide.subtitle}</span>
                        </h1>
                        <p className="mt-4 text-xs md:text-sm lg:text-base">
                            {slide.description}
                        </p>
                        <button className={`mt-6 px-4 md:px-6 py-2 ${slide.buttonColor} rounded-sm`}>
                            {slide.buttonText}
                        </button>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-16">
                        <Image src={slide.imageSrc} alt={slide.imageAlt} width={400} height={400} />
                    </div>
                </div>
            ))}
        </AwesomeSlider>
    );
};

export default Carousel;
