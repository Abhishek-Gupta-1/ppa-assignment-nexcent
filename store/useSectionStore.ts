import create from 'zustand';

interface Section {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
}

interface SectionStore {
  sections: { [key: string]: Section };
  setSection: (key: string, sectionData: Section) => void;
}

const useSectionStore = create<SectionStore>((set) => ({
  sections: {},
  setSection: (key, sectionData) => set((state) => ({
    sections: {
      ...state.sections,
      [key]: sectionData,
    },
  })),
}));

export default useSectionStore;
