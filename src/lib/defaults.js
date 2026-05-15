import {L} from './localize';

// Default content. Used as a fallback when Firestore has no document yet
// (so the site renders identically before anyone edits anything).
//
// Translatable fields are stored as { en, vn } objects so the admin
// editor can edit both languages and the public site picks the right
// one via `useLocalize()`. Non-translatable fields (URLs, photos,
// emails, ids, type slugs) stay as plain values.

export const heroDefault = {
    greeting: L('Hi,', 'Xin chào,'),
    name: L('I am Ly!', 'Em là Ly!'),
    tagline1: L(
        'I have a background in Economics and Finance. But I also code!',
        'Em có bằng đại học về kinh tế và tài chính. Nhưng em cũng biết code!',
    ),
    tagline2: L('Welcome to my CV.', 'Mời cả nhà xem CV của em.'),
    ctaLabel: L('Get to know me', 'Tìm hiểu thêm về em'),
};

export const aboutDefault = {
    heading: L('About me', 'Em là ai?'),
    body: L(
        'I am a recent graduate from Royal Melbourne Institute of Technology. I have a background in Economics and Finance. I am also a self-taught programmer. I have experience in Frontend Web Development, Data Analytics and Machine Learning.',
        'Em vừa tốt nghiệp từ trường Royal Melbourne Institute of Technology. Em có bằng kinh tế và tài chính. Em cũng tự học lập trình. Em có kinh nghiệm về Lập trình web frontend, phân tích dữ liệu và Machine Learning.',
    ),
    ctaLabel: L('See my experience', 'Xem kinh nghiệm của em'),
};

export const experiencesDefault = {
    heading: L('Relevant experience', 'Kinh nghiệm liên quan'),
    ctaLabel: L('Get in touch!', 'Liên hệ với em!'),
    items: [
        {
            id: 'js',
            iconKey: 'js',
            title: L('Frontend Web Development', 'Lập trình web frontend'),
            blurb: L(
                "I've contributed to React/TypeScript apps through my part-time job",
                'Em đã tham gia phát triển ứng dụng React/TypeScript qua công việc bán thời gian',
            ),
            link: '/works?profile=frontend',
            linkLabel: L('See more', 'Xem thêm'),
        },
        {
            id: 'r',
            iconKey: 'r',
            title: L('Data Analytics', 'Phân tích dữ liệu'),
            blurb: L(
                "I've used R for Econometrics assignments on empirical analysis",
                'Em đã sử dụng R cho các bài tập về phân tích dữ liệu thực nghiệm',
            ),
            link: '/works?profile=data',
            linkLabel: L('See more', 'Xem thêm'),
        },
        {
            id: 'python',
            iconKey: 'python',
            title: L('Machine Learning', 'Machine Learning'),
            blurb: L(
                "I've taken a Machine Learning course during my time in university",
                'Em đã học khoá Machine Learning trong thời gian ở trường',
            ),
            link: '/works?profile=data',
            linkLabel: L('See more', 'Xem thêm'),
        },
    ],
};

export const projectsDefault = {
    items: [
        {
            title: L('DDG Psychothérapie website'),
            tags: ['React', 'Tailwind', 'Material UI', 'i18n', 'Responsive', 'CSS'],
            type: 'frontend',
            url: 'https://www.ddgcabinetpsy.ch/',
            photo: '/imgs/projects/ddg.svg',
        },
        {
            title: L('ICG website'),
            tags: ['TypeScript', 'Material UI', 'Animations', 'Debugging', 'MantineUI', 'CSS', 'Tailwind'],
            type: 'frontend',
            url: 'https://www.icg.ch/',
            photo: '/imgs/projects/icg.svg',
        },
        {
            title: L('Deepsel website'),
            tags: ['Carousel Component', 'Material UI', 'Mantine UI', 'Lake UI', 'CSS', 'Responsive', 'Tailwind'],
            type: 'frontend',
            url: 'https://deepsel.com/',
            photo: '/imgs/projects/deepsel.svg',
        },
        {
            title: L('Clubloungery website'),
            tags: ['React', 'Material UI', 'Responsive', 'i18n', 'Tailwind', 'Animations'],
            type: 'frontend',
            url: 'https://clublounger-preview.deepsel.com/',
            photo: '/imgs/projects/clubloungery.svg',
        },
        {
            title: L('NativeOps website'),
            tags: ['React', 'i18n', 'Animations', 'debugging', 'Tailwind', 'CSS'],
            type: 'frontend',
            url: 'https://www.nativeops.swiss/',
            photo: '/imgs/projects/NativeOps.svg',
        },
        {
            title: L('ODA Learning website'),
            tags: ['Material UI', 'Tailwind', 'Responsive'],
            type: 'frontend',
            url: 'https://oda-preview.deepsel.com/',
            photo: '/imgs/projects/oda-logo.png',
        },
        {
            title: L('Machine Learning: Empirical Project', 'Dự án thực nghiệm Machine Learning'),
            tags: ['Python', 'Jupyter Notebook', 'Analytics', 'pandas', 'numpy', 'scikit-learn', 'matplotlib', 'seaborn'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1612-banking-ml',
            photo: '/imgs/projects/econ1612.png',
        },
        {
            title: L('Individual Statistical Analysis Project', 'Dự án cá nhân: phân tích thống kê'),
            tags: ['R', 'RStudio', 'ggplot2', 'dplyr', 'tidyverse'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-individual',
            photo: '/imgs/projects/econ1313-indi.png',
        },
        {
            title: L('Group Empirical Analysis in R', 'Dự án nhóm: phân tích thực nghiệm bằng R'),
            tags: ['R', 'RStudio', 'Teamwork', 'fpp3', 'readxl', 'dplyr', 'car', 'lmtest', 'stargazer', 'pastecs'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-group',
            photo: '/imgs/projects/econ1313-group.png',
        },
    ],
};

export const footerDefault = {
    heading: L('Feel free to get in touch!', 'Hãy liên hệ với em!'),
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
            label: L('Frontend Web Development', 'Lập trình web frontend'),
            projectTypes: ['frontend'],
            experienceIds: ['js'],
        },
        {
            id: 'data',
            label: L('Data Analytics / Machine Learning', 'Phân tích dữ liệu / Machine Learning'),
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
