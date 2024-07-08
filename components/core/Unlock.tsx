"use client";
import React, { useEffect } from 'react';
import SplitSection from '../common/SplitSection';
import useSectionStore from '@/store/useSectionStore';
import { images } from '@/data/Cdn'

const Unlock: React.FC = () => {
    const setSection = useSectionStore((state) => state.setSection);
    const sectionData = useSectionStore((state) => state.sections['unlock']);

    useEffect(() => {
        setSection('unlock', {
            imageSrc: images.unlock,
            imageAlt: 'Illustration',
            title: 'The unseen of spending three years at Pixelgrade',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
            buttonText: 'Learn More',
        });
    }, [setSection]);

    if (!sectionData) return null;

    return <SplitSection {...sectionData} />;
};

export default Unlock;

