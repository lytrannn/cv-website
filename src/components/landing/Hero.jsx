import {useTranslation} from "react-i18next";
import {t} from "../../i18n/function";
export function Hero() {

    const scrollToNextSection = () => {
      const nextSection = document.getElementById('about');
       nextSection && nextSection.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <section id={"hero"}
                 className={'bg-primary-main flex flex-col !w-[100vw] !h-[100vh] p-0 items-center justify-center'}>
            <div
                className={'flex flex-col md:flex-row text-[100px] !place-items-center !w-fit !text-center mx-auto text-5xl md:text-6xl gap-[20px]'}>
                <h1 className={'font-normal italic font-serif'}>{t("Hi,")}
                </h1>
                <h1 className={'font-normal italic font-serif text-brown-main'}> {t("I am Ly!")}</h1>
            </div>
            <h1 className={'mt-[40px] text-[20px] md:text-[32px] text-center max-w-[80%]'}>{t("I have a background in Economics and Finance. But I also code!")}</h1>
            <h1 className={'mt-[10px] text-[20px] md:text-[32px]'}>{t("Welcome to my CV.")}</h1>
            <div>
                <button
                    className={'flex flex-col mt-[40px] text-[24px] group text-brown-main font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                    onClick={scrollToNextSection}>{t("Get to know me")} <img src={'/imgs/double-arrow-down-svgrepo-com.svg'}
                                                                      className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                </button>
            </div>
        </section>
    )
}