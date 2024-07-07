"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AchievementData } from '@/data/Achievements';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const startCountingRef = useRef(false);

    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation triggers only once
        threshold: 0.5, // Adjust as needed
    });

    useEffect(() => {
        if (inView && !startCountingRef.current) {
            setStartAnimation(true);
            startCountingRef.current = true;
        }
    }, [inView]);

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-8 md:mb-0">
                    <h2 className="lg:text-5xl md:text-3xl sm:text-4xl font-bold mb-4">
                        Helping a local <span className="text-green-500 block">business reinvent itself</span>
                    </h2>
                    <p className="text-lg md:text-xl">We reached here with our hard work and dedication</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 md:gap-x-32">
                    {AchievementData.map((data) => (
                        <div key={data.label} className="flex flex-col items-center" ref={ref}>
                            <Image src={data.src} alt={data.label} width={50} height={50} />
                            {startAnimation && (
                                <p className="text-xl md:text-2xl font-bold mt-4">
                                    <CountUp end={data.number} />
                                </p>
                            )}
                            <p className="text-sm md:text-base">{data.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Achievements;
