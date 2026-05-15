import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {t} from "../../i18n/function";

export function Header() {

    const {i18n} = useTranslation();
    const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
    const [bgBrown, setBgBrown] = useState(false);

    useEffect(() => {
        setBgColour();
        window.addEventListener('scroll', setBgColour);
        return () => window.removeEventListener('scroll', setBgColour);

    }, [])

    function setBgColour() {
        const self = document.getElementById('header');
        if (self) {
            const {x, y, width, height} = self.getBoundingClientRect();
            const middleX = x + width / 2;
            const middleY = y + height / 2;
            const els = document.elementsFromPoint(middleX, middleY);
            const section = els.find((el) => el.tagName === 'SECTION');
            if (!section) {
                setBgBrown(false);
                return;
            }

            if (section.className.includes('bg-brown-main')) {
                setBgBrown(true)
            } else {
                setBgBrown(false)
            }
        }
    }

    const changeLanguage = (lng) => {
        if (lng === currentLang) return;
        i18n.changeLanguage(lng);
    }

    return (
        <div id={"header"}
             className={`${bgBrown ? 'bg-primary-main/[80%]' : 'bg-brown-main/[90%]'}   flex flex-row !pl-[30px] justify-between w-[100%] h-[75px] lg:h-[100px] !m-0 !p-0 !sticky z-[100000] top-0 left-0`}>
            <div className={'flex flex-row h-fit my-auto md:gap-[30px] '}>
                <div className={'flex flex-col group'}>
                    <Link to={"/"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] max-md:px-[10px] sm:text-[20px] md:text-[24px] lg:text-[32px] my-auto font-semibold`}>{t("Home")}</Link>
                    <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-out ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
                <div className={'flex flex-col group'}>
                    <Link to={"/works"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] sm:text-[20px] md:text-[24px] lg:text-[32px] max-md:px-[10px] my-auto font-semibold`}>{t("Projects")}</Link>
                     <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-out ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
                <div className={'flex flex-col group'}>

                    <Link to={"/contact"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] sm:text-[20px] md:text-[24px] lg:text-[32px] max-md:px-[10px] my-auto font-semibold`}>{t("Contact")}</Link>
                    <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-out ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
            </div>
            <div className={'flex flex-row gap-[8px] md:gap-[12px] items-center pr-[20px] md:pr-[30px]'}>
                <button type={'button'}
                        onClick={() => changeLanguage('en')}
                        aria-label={'Switch to English'}
                        aria-pressed={currentLang === 'en'}
                        className={`text-[18px] md:text-[24px] lg:text-[28px] leading-none transition-opacity ${currentLang === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                    🇬🇧
                </button>
                <button type={'button'}
                        onClick={() => changeLanguage('vn')}
                        aria-label={'Chuyển sang tiếng Việt'}
                        aria-pressed={currentLang === 'vn'}
                        className={`text-[18px] md:text-[24px] lg:text-[28px] leading-none transition-opacity ${currentLang === 'vn' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                    🇻🇳
                </button>
                <img src={'/imgs/tofu.svg'} alt={''} className={'bg-transparent h-[40px] w-[40px] md:h-[60px] md:w-[60px]'}/>
            </div>
        </div>
    )
}