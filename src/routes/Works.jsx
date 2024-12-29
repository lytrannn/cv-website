import {Header} from "../components/common/Header";
import {Tabs} from "@mantine/core";
import {useState} from "react";

export const Works = () => {
    const [activeTab, setActiveTab] = useState("frontend");

    const projects = [
        {
            title: 'DDG Psychothérapie website',
            tags: ["React", 'Tailwind', 'Material UI', 'i18n', 'Tailwind', 'Responsive', 'CSS'],
            type: 'frontend',
            url: 'https://www.ddgcabinetpsy.ch/',
            photo: '/imgs/projects/ddg.svg'
        },
        {
            title: 'ICG website',
            tags: ["TypeScript", 'Material UI', 'Animations', 'Debugging', 'MantineUI', 'CSS', 'Tailwind',],
            type: 'frontend',
            url: 'https://www.icg.ch/',
            photo: '/imgs/projects/icg.svg'
        },
        {
            title: 'Deepsel website',
            tags: ['Carousel Component', 'Material UI', 'Mantine UI', 'Lake UI', 'CSS', 'Responsive', 'Tailwind',],
            type: 'frontend',
            url: 'https://deepsel.com/',
            photo: '/imgs/projects/deepsel.svg'
        },
        {
            title: 'Clubloungery website',
            tags: ['React', 'Material UI', 'Responsive', 'i18n', 'Tailwind', 'Animations'],
            type: 'frontend',
            url: 'https://clublounger-preview.deepsel.com/',
            photo: '/imgs/projects/clubloungery.svg'

        },
        {
            title: 'NativeOps website',
            tags: ['React', 'i18n', 'Animations', 'debugging', 'Tailwind', 'CSS'],
            type: 'frontend',
            url: 'https://www.nativeops.swiss/',
            photo: '/imgs/projects/NativeOps.svg'

        },
        {
            title: 'ODA Learning website',
            tags: ['Material UI', 'Tailwind', 'Responsive'],
            type: 'frontend',
            url: 'https://oda-preview.deepsel.com/',
            photo: '/imgs/projects/oda-logo.png'

        },
        {
            title: 'Machine Learning: Empirical Project',
            tags: ['Python', 'Jupyter Notebook', 'Analytics', 'pandas', 'numpy', 'scikit-learn', 'matplotlib', 'seaborn',],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1612-banking-ml',
            photo: '/imgs/projects/econ1612.png'

        },
        {
            title: 'Individual Statistical Analysis Project',
            tags: ['R', 'RStudio', 'ggplot2', 'dplyr', 'tidyverse'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-individual',
            photo: '/imgs/projects/econ1313-indi.png'

        },
        {
            title: 'Group Empirical Analysis in R',
            tags: ['R', 'RStudio', 'Teamwork', 'fpp3', 'readxl', 'dplyr', 'car', 'lmtest', 'stargazer', 'pastecs'],
            type: 'data',
            url: 'https://github.com/lytrannn/econ1313-econometrics-group',
            photo: '/imgs/projects/econ1313-group.png'

        },


    ]
    return (
        <>
            <Header/>
            <section id={"about"}
                     className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] md:!min-h-[100vh] p-0 items-center justify-center'}>
                <Tabs defaultValue={"frontend"} color={"#915c62"} classNames={{
                    tabLabel: "text-primary-main text-[12px] text-wrap text-center max-sm:max-w-[100px] lg:text-[28px] font-serif md:font-semibold",
                    tab: "hover:bg-[#915c62]"
                }}
                      className={'w-[80%] mb-[30px]'}>
                    <Tabs.List grow defaultValue={"frontend"} >
                        <Tabs.Tab value={"frontend"} onClick={() => setActiveTab("frontend")}>Frontend Web
                            Dev</Tabs.Tab>
                        <Tabs.Tab value={"data"} onClick={() => setActiveTab("data")}>Data Analytics / Machine
                            Learning</Tabs.Tab>
                    </Tabs.List>


                </Tabs>
                <div className={'flex w-[90%] gap-[100px] w-full flex-wrap !place-items-center justify-center'}>
                    {activeTab === "frontend" ?
                        projects.filter((project) => project.type === "frontend").map((project, index) => {
                                return (
                                    <a href={project.url} target={'_blank'} key={index}
                                            className={'flex flex-col gap-[10px] w-full h-fit w-full md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-lg'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{project.title}</h1>
                                             <div className={'bg-primary-main h-[200px] w-full'}>
                                                <img src={project.photo} className={'h-full w-full object-none'}/>
                                            </div>
                                            <div className={'flex !gap-[10px] flex-wrap h-[125px] justify-left'}>
                                                {project.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index}
                                                              className={'bg-brown-light text-primary-main p-[5px] h-fit rounded-md '}>{tag}</span>
                                                    )
                                                })}
                                            </div>
                                            <a href={project.url} target={'_blank'}
                                               className={'place-self-end bottom-0 text-brown-main font-semibold'}>View live
                                                here</a>
                                    </a>

                                )
                            }
                        )
                        :

                        projects.filter((project) => project.type === "data").map((project, index) => {
                                return (
                                     <a href={project.url} target={'_blank'} key={index}
                                            className={'flex flex-col gap-[10px] h-fit w-full md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-lg'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{project.title}</h1>
                                             <div className={'bg-primary-main h-[200px] w-full'}>
                                                <img src={project.photo} className={'h-full w-full object-none'}/>
                                            </div>
                                            <div className={'flex !gap-[10px] flex-wrap h-[125px] justify-left'}>
                                                {project.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index}
                                                              className={'bg-brown-light text-primary-main p-[5px] h-fit rounded-md '}>{tag}</span>
                                                    )
                                                })}
                                            </div>
                                            <a href={project.url} target={'_blank'}
                                               className={'place-self-end bottom-0 text-brown-main font-semibold'}>View repo
                                                here</a>
                                    </a>
                                )
                            }
                        )
                    }

                </div>


            </section>

        </>
    )
}