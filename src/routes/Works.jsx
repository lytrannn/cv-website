import {Header} from "../components/common/Header";
import {Tabs} from "@mantine/core";
import {useEffect, useState} from "react";
import {t} from "../i18n/function";
import {TextSlide} from "@deepsel/lake-ui";
import {useContent} from "../lib/useContent";

export const Works = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const {content} = useContent('projects');
    const projects = content.items || [];
    useEffect(() => {
        if (window.location.hash === "#frontend") {
            setActiveTab("frontend")
        } else if (window.location.hash === "#analytics") {
            setActiveTab("data")
        }
    }, []);


    return (
        <>
            <Header/>
            <section id={"about"}
                     className={'bg-brown-main flex flex-col !w-[100vw] h-fit py-[50px] md:!min-h-[100vh] p-0 items-center justify-start md:py-[100px] overflow-hidden'}>
                <Tabs value={activeTab} color={"#b52636"} classNames={{
                    tabLabel: "text-primary-main text-[12px] text-wrap text-center max-sm:max-w-[100px] lg:text-[28px] font-serif md:font-semibold hover:font-bold",
                    tab: "!bg-transparent"
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
                                    <TextSlide key={project.url} delay={((index + 1) * 300)}>
                                        <a href={project.url} target={'_blank'} rel={'noopener noreferrer'}
                                           className={'flex flex-col gap-[10px] hover:translate-y-[-10px] transition-all duration-50 w-full h-fit md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-md'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{t(project.title)}</h1>
                                            <div className={'bg-primary-main !min-h-[150px] w-full flex flex-1'}>
                                                <img src={project.photo} alt={project.title} className={'h-full w-full object-contain'}/>
                                            </div>
                                            <div
                                                className={'flex !gap-x-[10px] !gap-y-[5px] flex-wrap shrink h-fit md:h-[75px] justify-left mt-[10px]'}>
                                                {project.tags.map((tag, tagIndex) => {
                                                    return (
                                                        <span key={tagIndex}
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
                                    <TextSlide delay={((index + 1) * 300)} key={project.url}>
                                        <a href={project.url} target={'_blank'} rel={'noopener noreferrer'}
                                           className={'flex flex-col gap-[10px] w-full h-fit hover:translate-y-[-10px] transition-all duration-50 md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-md'}>
                                            <h1 className={'text-brown-main text-[24px] font-serif'}>{t(project.title)}</h1>
                                            <div className={'bg-primary-main !min-h-[150px] w-full flex flex-1'}>
                                                <img src={project.photo} alt={project.title} className={'h-full w-full object-contain'}/>
                                            </div>
                                            <div
                                                className={'flex !gap-x-[10px] !gap-y-[5px] flex-wrap shrink h-fit md:h-[75px] justify-left mt-[10px]'}>
                                                {project.tags.map((tag, tagIndex) => {
                                                    return (
                                                        <span key={tagIndex}
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