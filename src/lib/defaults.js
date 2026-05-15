// Default content. Used as a fallback when Firestore has no document yet
// (so the site renders identically before anyone edits anything). The
// shape of each export is also the shape of the Firestore document at
// `content/<section>` — the admin editor reads/writes the same fields.

export const heroDefault = {
    greeting: 'Hi,',
    name: 'I am Ly!',
    tagline1: 'I have a background in Economics and Finance. But I also code!',
    tagline2: 'Welcome to my CV.',
    ctaLabel: 'Get to know me',
};

export const aboutDefault = {
    heading: 'About me',
    body: 'I am a recent graduate from Royal Melbourne Institute of Technology. I have a background in Economics and Finance. I am also a self-taught programmer. I have experience in Frontend Web Development, Data Analytics and Machine Learning.',
    ctaLabel: 'See my experience',
};

export const experiencesDefault = {
    heading: 'Relevant experience',
    ctaLabel: 'Get in touch!',
    items: [
        {
            id: 'js',
            iconKey: 'js',
            title: 'Frontend Web Development',
            blurb: "I've contributed to React/TypeScript apps through my part-time job",
            link: '/works?profile=frontend',
            linkLabel: 'See more',
        },
        {
            id: 'r',
            iconKey: 'r',
            title: 'Data Analytics',
            blurb: "I've used R for Econometrics assignments on empirical analysis",
            link: '/works?profile=data',
            linkLabel: 'See more',
        },
        {
            id: 'python',
            iconKey: 'python',
            title: 'Machine Learning',
            blurb: "I've taken a Machine Learning course during my time in university",
            link: '/works?profile=data',
            linkLabel: 'See more',
        },
    ],
};

export const projectsDefault = {
    items: [
        {
            title: 'DDG Psychothérapie website',
            tags: ['React', 'Tailwind', 'Material UI', 'i18n', 'Responsive', 'CSS'],
            type: 'frontend',
            url: 'https://www.ddgcabinetpsy.ch/',
            photo: '/imgs/projects/ddg.svg',
        },
        {
            title: 'ICG website',
            tags: ['TypeScript', 'Material UI', 'Animations', 'Debugging', 'MantineUI', 'CSS', 'Tailwind'],
            type: 'frontend',
            url: 'https://www.icg.ch/',
            photo: '/imgs/projects/icg.svg',
        },
        {
            title: 'Deepsel website',
            tags: ['Carousel Component', 'Material UI', 'Mantine UI', 'Lake UI', 'CSS', 'Responsive', 'Tailwind'],
            type: 'frontend',
            url: 'https://deepsel.com/',
            photo: '/imgs/projects/deepsel.svg',
        },
        {
            title: 'Clubloungery website',
            tags: ['React', 'Material UI', 'Responsive', 'i18n', 'Tailwind', 'Animations'],
            type: 'frontend',
            url: 'https://clublounger-preview.deepsel.com/',
            photo: '/imgs/projects/clubloungery.svg',
        },
        {
            title: 'NativeOps website',
            tags: ['React', 'i18n', 'Animations', 'debugging', 'Tailwind', 'CSS'],
            type: 'frontend',
            url: 'https://www.nativeops.swiss/',
            photo: '/imgs/projects/NativeOps.svg',
        },
        {
            title: 'ODA Learning website',
            tags: ['Material UI', 'Tailwind', 'Responsive'],
            type: 'frontend',
            url: 'https://oda-preview.deepsel.com/',
            photo: '/imgs/projects/oda-logo.png',
        },
        {
            title: 'Machine Learning: Empirical Project',
            tags: ['Python', 'Jupyter Notebook', 'Analytics', 'pandas', 'numpy', 'scikit-learn', 'matplotlib', 'seaborn'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1612-banking-ml',
            photo: '/imgs/projects/econ1612.png',
        },
        {
            title: 'Individual Statistical Analysis Project',
            tags: ['R', 'RStudio', 'ggplot2', 'dplyr', 'tidyverse'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-individual',
            photo: '/imgs/projects/econ1313-indi.png',
        },
        {
            title: 'Group Empirical Analysis in R',
            tags: ['R', 'RStudio', 'Teamwork', 'fpp3', 'readxl', 'dplyr', 'car', 'lmtest', 'stargazer', 'pastecs'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-group',
            photo: '/imgs/projects/econ1313-group.png',
        },
    ],
};

export const footerDefault = {
    heading: 'Feel free to get in touch!',
    email: 'huonglytrannn@gmail.com',
    phone: '+84 919 624 028',
    github: 'https://github.com/lytrannn',
    linkedin: 'https://www.linkedin.com/in/lytrannn',
    facebook: 'https://www.facebook.com/lytrannnnnnn',
};

// Job profiles: a profile is a curated subset of the CV — which project
// types appear under it, and which experience cards are kept (i.e. not
// archived) for it. Used by the Works tabs and by the Experiences
// section when the URL has ?profile=<id>.
export const profilesDefault = {
    defaultId: 'frontend',
    items: [
        {
            id: 'frontend',
            label: 'Frontend Web Development',
            projectTypes: ['frontend'],
            experienceIds: ['js'],
        },
        {
            id: 'data',
            label: 'Data Analytics / Machine Learning',
            projectTypes: ['data'],
            experienceIds: ['r', 'python'],
        },
    ],
};

export const SECTIONS = {
    hero: heroDefault,
    about: aboutDefault,
    experiences: experiencesDefault,
    projects: projectsDefault,
    footer: footerDefault,
    profiles: profilesDefault,
};
