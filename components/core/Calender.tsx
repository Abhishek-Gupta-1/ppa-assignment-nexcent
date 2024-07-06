"use client";
import React, { useEffect } from 'react';
import SplitSection from '../common/SplitSection';
import useSectionStore from '@/store/useSectionStore';

const Calender: React.FC = () => {
    const setSection = useSectionStore((state) => state.setSection);
    const sectionData = useSectionStore((state) => state.sections['calender']);

    useEffect(() => {
        setSection('calender', {
            imageSrc: '/calender/illustration3.png',
            imageAlt: 'Illustration3',
            title: 'How to design your site footer like we did',
            description:
                'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.',
            buttonText: 'Learn More',
        });
    }, [setSection]);

    if (!sectionData) return null;

    return <SplitSection {...sectionData} />;
};

export default Calender;
