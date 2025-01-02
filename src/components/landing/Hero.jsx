import {t} from "../../i18n/function";
import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";

export function Hero() {

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        nextSection && nextSection.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <section id={"hero"}
                 className={'bg-primary-main flex flex-col !w-[100vw] !h-[100vh] p-0 items-center justify-center'}>
            <div
                className={'flex flex-col md:flex-row text-[100px] !place-items-center !w-fit !text-center mx-auto text-3xl md:text-6xl gap-[20px] leading-relaxed'}>
                <TextSlide delay={350} className={'font-normal italic font-serif'}>{t("Hi,")}
                </TextSlide>
                <TextSlide
                    className={'font-normal italic font-serif text-brown-light/[80%] leading-relaxed'}> {t("I am Ly!")}</TextSlide>
            </div>
            <TextSlide delay={600}
                       className={'mt-[40px] text-[20px] md:text-[32px] text-center max-w-[80%]'}>{t("I have a background in Economics and Finance. But I also code!")}</TextSlide>
            <TextSlide delay={1200}
                       className={'mt-[10px] text-[20px] md:text-[32px]'}>{t("Welcome to my CV.")}</TextSlide>
            <FadeAnimation delay={1.8} >
                <TextSlide delay={1800}>
                    <button
                        className={'flex flex-col mt-[40px] text-[24px] group text-brown-main font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                        onClick={scrollToNextSection}>{t("Get to know me")} <img
                        src={'/imgs/double-arrow-down-brown.svg'}
                        className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                    </button>
                </TextSlide>
            </FadeAnimation>
        </section>
    )
}