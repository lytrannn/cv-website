import {Header} from "../components/common/Header";
import {Tabs} from "@mantine/core";
import {useEffect, useMemo, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {t} from "../i18n/function";
import {TextSlide} from "@deepsel/lake-ui";
import {useContent} from "../lib/useContent";

// Legacy hash anchors (the Experiences section used to point at
// /works#frontend and /works#analytics). Map them to profile ids so old
// links keep working.
const HASH_TO_PROFILE = {
    '#frontend': 'frontend',
    '#analytics': 'data',
    '#data': 'data',
};

// Whether a project belongs to a profile. Treat an empty projectTypes
// list as "include everything" so a profile can be a catch-all.
function projectInProfile(project, profile) {
    if (!profile) return true;
    const types = profile.projectTypes;
    if (!Array.isArray(types) || types.length === 0) return true;
    return types.includes(project.type);
}

export const Works = () => {
    const {content: projectsContent} = useContent('projects');
    const {content: profilesContent} = useContent('profiles');
    const projects = projectsContent.items || [];
    const profiles = profilesContent.items || [];

    const location = useLocation();
    const navigate = useNavigate();

    // Initial profile: URL ?profile= > legacy #hash > defaultId > first.
    const initialProfileId = useMemo(() => {
        const search = new URLSearchParams(location.search);
        const fromQuery = search.get('profile');
        if (fromQuery) return fromQuery;
        const fromHash = HASH_TO_PROFILE[location.hash];
        if (fromHash) return fromHash;
        return profilesContent.defaultId || profiles[0]?.id;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profiles.length, profilesContent.defaultId]);

    const [activeTab, setActiveTab] = useState(initialProfileId);

    // If profiles load after first render (e.g. Firestore), pick up the
    // default once we have it.
    useEffect(() => {
        if (!activeTab && initialProfileId) setActiveTab(initialProfileId);
    }, [initialProfileId, activeTab]);

    const activeProfile = profiles.find((p) => p.id === activeTab) || profiles[0];
    const visibleProjects = projects.filter((p) => projectInProfile(p, activeProfile));

    const handleTab = (id) => {
        setActiveTab(id);
        const search = new URLSearchParams(location.search);
        search.set('profile', id);
        // Drop the legacy hash once the user has clicked a tab so the
        // URL stays clean.
        navigate({pathname: location.pathname, search: `?${search.toString()}`, hash: ''}, {replace: true});
    };

    return (
        <>
            <Header/>
            <section id={"about"}
                     className={'bg-brown-main flex flex-col !w-[100vw] h-fit py-[50px] md:!min-h-[100vh] p-0 items-center justify-start md:py-[100px] overflow-hidden'}>
                {profiles.length > 0 && (
                    <Tabs value={activeTab} color={"#b52636"} classNames={{
                        tabLabel: "text-primary-main text-[12px] text-wrap text-center max-sm:max-w-[100px] lg:text-[28px] font-serif md:font-semibold hover:font-bold",
                        tab: "!bg-transparent",
                    }}
                          className={'w-[80%] mb-[30px] place-self-top'}>
                        <Tabs.List grow>
                            {profiles.map((profile) => (
                                <Tabs.Tab key={profile.id}
                                          value={profile.id}
                                          onClick={() => handleTab(profile.id)}>
                                    <TextSlide>{t(profile.label)}</TextSlide>
                                </Tabs.Tab>
                            ))}
                        </Tabs.List>
                    </Tabs>
                )}

                <div className={'flex w-[80%] gap-[100px] flex-wrap !place-items-center justify-center'}>
                    {visibleProjects.map((project, index) => (
                        <TextSlide key={project.url || index} delay={((index + 1) * 300)}>
                            <a href={project.url} target={'_blank'} rel={'noopener noreferrer'}
                               className={'flex flex-col gap-[10px] hover:translate-y-[-10px] transition-all duration-50 w-full h-fit md:w-[500px] md:h-[400px] bg-primary-main/[90%] p-[20px] rounded-md'}>
                                <h1 className={'text-brown-main text-[24px] font-serif'}>{t(project.title)}</h1>
                                <div className={'bg-primary-main !min-h-[150px] w-full flex flex-1'}>
                                    <img src={project.photo} alt={project.title}
                                         className={'h-full w-full object-contain'}/>
                                </div>
                                <div
                                    className={'flex !gap-x-[10px] !gap-y-[5px] flex-wrap shrink h-fit md:h-[75px] justify-left mt-[10px]'}>
                                    {(project.tags || []).map((tag, tagIndex) => (
                                        <span key={tagIndex}
                                              className={'bg-brown-light text-primary-main p-[5px] h-fit rounded-md '}>{tag}</span>
                                    ))}
                                </div>
                                <div className={'place-self-end bottom-0 text-brown-main font-semibold'}>
                                    {t(project.type === 'data' ? 'View repo here' : 'View live here')}
                                </div>
                            </a>
                        </TextSlide>
                    ))}

                    {visibleProjects.length === 0 && (
                        <div className={'text-primary-main/[80%] py-[40px]'}>
                            {t('No projects in this profile yet.')}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
