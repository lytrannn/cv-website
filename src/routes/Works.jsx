import {Header} from "../components/common/Header";
import {Tabs} from "@mantine/core";
import {useEffect, useState} from "react";
import {t} from "../i18n/function";
import {TextSlide} from "@deepsel/lake-ui";

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
    useEffect(() => {
        return () => {
            if (window.location.hash === "#frontend") {
                setActiveTab("frontend")
            } else if (window.location.hash === "#analytics") {
                setActiveTab("data")
            }
        };
    }, []);


    return (
        <>
            <Header/>
            <section id={"about"}
                     className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] md:!min-h-[100vh] p-0 items-center justify-start md:py-[100px]'}>
                <Tabs value={activeTab} color={"#b52636"} classNames={{
                    tabLabel: "text-primary-main text-[12px] text-wrap text-center max-sm:max-w-[100px] lg:text-[28px] font-serif md:font-semibold hover:font-bold",
                    tab: "hover:!bg-transparent !bg-transparent"
                }}
                      className={'w-[80%] mb-[30px] place-self-top'}>
                    <Tabs.List grow defaultValue={"frontend"}>
                        <Tabs.Tab value={"frontend"}
                                  onClick={() => setActiveTab("frontend")}>
                            <TextSlide>{t("Frontend Web Development")}</TextSlide></Tabs.Tab>
                        <Tabs.Tab value={"data"} onClick={() => setActiveTab("data")}>
                            <TextSlide>{t("Data Analytics")} / Machine
                                Learning</TextSlide></Tabs.Tab>
                    </Tabs.List>


                </Tabs>
                <div className={'flex w-[80%] gap-[100px] flex-wrap !place-items-center justify-center'}>
                    {activeTab === "frontend" ?
                        projects.filter((project) => project.type === "frontend").map((project, index) => {
                                return (
                                    <TextSlide key={index} delay={((index + 1) * 300)}>
                                        <a href={project.url} target={'_blank'} key={index}
                                           className={'flex flex-col gap-[10px] w-ful¬l h-fit w-full md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-lg'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{t(project.title)}</h1>
                                            <div className={'bg-primary-main !min-h-[150px] w-full flex flex-1'}>
                                                <img src={project.photo} className={'h-full w-full object-none'}/>
                                            </div>
                                            <div
                                                className={'flex !gap-x-[10px] !gap-y-[5px] flex-wrap shrink h-fit md:h-[75px] justify-left mt-[10px]'}>
                                                {project.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index}
                                                              className={'bg-brown-light text-primary-main p-[5px] h-fit rounded-md '}>{tag}</span>
                                                    )
                                                })}
                                            </div>
                                            <div
                                                className={'place-self-end bottom-0 text-brown-main font-semibold'}>{t("View live here")}
                                            </div>
                                        </a>
                                    </TextSlide>

                                )
                            }
                        )
                        :

                        projects.filter((project) => project.type === "data").map((project, index) => {
                                return (
                                    <TextSlide delay={((index + 1) * 300)} key={index}>
                                        <a href={project.url} target={'_blank'} key={index}
                                           className={'flex flex-col gap-[10px] w-full h-fit w-full md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-lg'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{t(project.title)}</h1>
                                            <div className={'bg-primary-main !min-h-[150px] w-full flex flex-1'}>
                                                <img src={project.photo} className={'h-full w-full object-none'}/>
                                            </div>
                                            <div
                                                className={'flex !gap-x-[10px] !gap-y-[5px] flex-wrap shrink h-fit md:h-[75px] justify-left mt-[10px]'}>
                                                {project.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index}
                                                              className={'bg-brown-light text-primary-main p-[5px] h-fit rounded-md '}>{tag}</span>
                                                    )
                                                })}
                                            </div>
                                            <div
                                                className={'place-self-end bottom-0 text-brown-main font-semibold'}>{t("View repo here")}
                                            </div>
                                        </a>
                                    </TextSlide>
                                )
                            }
                        )
                    }

                </div>


            </section>

        </>
    )
}