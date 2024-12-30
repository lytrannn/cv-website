import {t} from "../../i18n/function";
import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";

export function About() {
    // const t = useTranslation();

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('experiences');
        nextSection && nextSection.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <section id={"about"}
                 className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] md:!h-[100vh] p-0 items-center justify-center'}>
            <div className={'flex flex-col md:flex-row gap-[20px] md:gap-[50px] xl:gap-[100px]'}>
                <div
                    className={`!flex md:!hidden w-[200px] h-[200px] rounded-full bg-cover bg-right-top bg-[url('/imgs/IMG_6305.jpeg')] mx-auto`}/>
                <div className={'flex flex-col gap-[20px] md:gap-[50px] items-start my-auto'}>
                    <FadeAnimation duration={1.5} className={'max-md:mx-auto'}>
                        <TextSlide
                                   className={'font-normal font-serif text-primary-main !mx-auto md:mx-0 text-center md:text-left text-[56px]'}>{t("About me")}</TextSlide>
                    </FadeAnimation>
                    <FadeAnimation delay={0.6} duration={1.5}>
                        <TextSlide delay={600} duration={'2000ms'}
                                   className={' text-[20px] md:text-[24px] text-primary-main text-center md:text-left  mx-auto w-[80%] md:w-[400px] xl:w-[500px] '}>
                            {t("I am a recent graduate from Royal Melbourne Institute of Technology. I have a background in Economics and Finance. I am also a self-taught programmer. I have experience in Frontend Web Development, Data Analytics and Machine Learning.")}</TextSlide>
                    </FadeAnimation>
                    <FadeAnimation delay={1.8} duration={2} className={'mx-auto'}>
                        <TextSlide delay={1800} duration={'2000ms'}>
                            <button
                                className={'flex flex-col mt-[40px] text-[24px] group text-primary-main mx-auto font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                                onClick={scrollToNextSection}>{t("See my experience")} <img
                                src={'/imgs/double-arrow-down-white.svg'}
                                className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                            </button>
                        </TextSlide>
                    </FadeAnimation>
                </div>
                <div
                    className={`!hidden md:!flex md:w-[300px] md:h-[500px] xl:w-[600px] xl:h-[800px] rounded-t-full bg-cover bg-[url('/imgs/IMG_6305.jpeg')]`}/>
            </div>
        </section>
    )
}