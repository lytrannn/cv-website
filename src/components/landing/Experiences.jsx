import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJs, faPython} from "@fortawesome/free-brands-svg-icons";
import {Link, useLocation} from "react-router-dom";
import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";
import {useContent} from "../../lib/useContent";
import {useLocalize} from "../../lib/localize";

// Icons can't live in Firestore, so the doc stores an iconKey and we
// resolve it here. Add new keys + their renderable here when needed.
function ItemIcon({iconKey}) {
    switch (iconKey) {
        case 'js':
            return <FontAwesomeIcon icon={faJs}
                                    className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>;
        case 'python':
            return <FontAwesomeIcon icon={faPython}
                                    className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>;
        case 'r':
            return <img src={'/imgs/R.svg'} alt={''}
                        className={'!w-[80px] !h-[80px] mx-auto my-auto'}/>;
        default:
            return null;
    }
}

export function Experiences() {
    const {content} = useContent('experiences');
    const {content: profilesContent} = useContent('profiles');
    const location = useLocation();
    const loc = useLocalize();

    // If the URL has ?profile=<id> and that profile lists experienceIds,
    // keep only the listed items (others are "archived" for that view).
    // No ?profile=, or an empty allowlist, means show everything.
    const profileId = new URLSearchParams(location.search).get('profile');
    const activeProfile = profileId
        ? (profilesContent.items || []).find((p) => p.id === profileId)
        : null;
    const allow = activeProfile?.experienceIds;
    const items = (content.items || []).filter((item) => {
        if (!Array.isArray(allow) || allow.length === 0) return true;
        return allow.includes(item.id || item.iconKey);
    });

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('contact');
        nextSection && nextSection.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section id={"experiences"}
                 className={'bg-primary-main flex flex-col xl:!w-[100vw] !h-fit py-[100px] xl:py-[80px] xl:!min-h-[100vh] p-0 items-center justify-center overflow-hidden relative z-10'}>
            <FadeAnimation>
                <TextSlide
                    className={'font-normal font-serif text-brown-main text-[56px] text-center'}>{loc(content.heading)}</TextSlide>
            </FadeAnimation>
            <div className={'flex flex-col xl:flex-row w-fit mx-auto mt-[60px] xl:mt-[100px] gap-[50px] xl:gap-[75px]'}>
                {items.map((item, index) => (
                    <div key={item.id || item.iconKey || index}
                         className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                        <FadeAnimation delay={1}>
                            <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                                <div
                                    className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                                    <ItemIcon iconKey={item.iconKey}/>
                                </div>
                            </div>
                        </FadeAnimation>
                        <TextSlide delay={2000}
                                   className={'font-serif mt-[20px] xl:mt-[50px] !w-fit text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[80%] mx-auto'}>{loc(item.title)}</TextSlide>
                        <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                        <TextSlide delay={2500}
                                   className={'text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[120px]'}>{loc(item.blurb)}</TextSlide>
                        <FadeAnimation delay={3} duration={1}
                                       className={'flex place-self-end xl:mt-[20px] mx-auto'}>
                            <TextSlide delay={3000}>
                                <Link to={item.link}
                                      className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] '}>{loc(item.linkLabel) || 'See more'}</Link>
                            </TextSlide>
                        </FadeAnimation>
                    </div>
                ))}
            </div>
            <FadeAnimation delay={1.8} duration={1}>
                <TextSlide delay={1800} duration={'2000ms'}>
                    <button
                        className={'flex flex-col mt-[40px] text-[24px] group text-brown-main font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                        onClick={scrollToNextSection}>{loc(content.ctaLabel)} <img
                        src={'/imgs/double-arrow-down-brown.svg'}
                        alt={''}
                        className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                    </button>
                </TextSlide>
            </FadeAnimation>
        </section>
    )
}
