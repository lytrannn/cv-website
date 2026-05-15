import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";
import {useContent} from "../../lib/useContent";
import {useLocalize} from "../../lib/localize";

export function About() {
    const {content} = useContent('about');
    const loc = useLocalize();

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('experiences');
        nextSection && nextSection.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <section id={"about"}
                 className={'bg-brown-main flex flex-col !w-[100vw] h-fit py-[50px] md:!min-h-[100vh] md:py-[80px] p-0 items-center justify-center overflow-hidden'}>
            <div className={'flex flex-col md:flex-row gap-[20px] md:gap-[50px] xl:gap-[100px]'}>
                <div
                    className={`!flex md:!hidden w-[200px] h-[200px] rounded-full bg-cover bg-right-top bg-[url('/imgs/IMG_6305.jpeg')] mx-auto`}/>
                <div className={'flex flex-col gap-[20px] md:gap-[50px] items-start my-auto'}>
                    <FadeAnimation  className={'max-md:mx-auto'}>
                        <TextSlide
                                   className={'font-normal font-serif text-primary-main !mx-auto md:mx-0 text-center md:text-left text-[56px]'}>{loc(content.heading)}</TextSlide>
                    </FadeAnimation>
                    <FadeAnimation delay={0.6} >
                        <TextSlide delay={600}
                                   className={' text-[20px] md:text-[24px] text-primary-main text-center md:text-left  mx-auto w-[80%] md:w-[400px] xl:w-[500px] '}>
                            {loc(content.body)}</TextSlide>
                    </FadeAnimation>
                    <FadeAnimation delay={1.8} duration={2} className={'mx-auto'}>
                        <TextSlide delay={1800} >
                            <button
                                className={'flex flex-col mt-[40px] text-[24px] group text-primary-main mx-auto font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                                onClick={scrollToNextSection}>{loc(content.ctaLabel)} <img
                                src={'/imgs/double-arrow-down-white.svg'}
                                alt={''}
                                className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                            </button>
                        </TextSlide>
                    </FadeAnimation>
                </div>
                <div
                    className={`!hidden md:!flex md:w-[300px] md:h-[500px] md:max-h-[80vh] xl:w-[600px] xl:h-[800px] xl:max-h-[85vh] shrink-0 rounded-t-full bg-cover bg-[url('/imgs/IMG_6305.jpeg')]`}/>
            </div>
        </section>
    )
}