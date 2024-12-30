import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import i18n from "i18next";
import {t} from "../../i18n/function";

export function Header() {

    const [bgBrown, setBgBrown] = useState(false);
    // const t = useTranslation();

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
        i18n.changeLanguage(lng);
        (window.scrollTo({
            top: 0,
            behavior: "smooth"
        }))
    }

    return (
        <div id={"header"}
             className={`${bgBrown ? 'bg-primary-main/[80%]' : 'bg-brown-main/[90%]'}   flex flex-row !px-[30px] justify-between w-[100%] h-[75px] lg:h-[100px] !m-0 !p-0 !sticky z-[100000] top-0 left-0`}>
            <div className={'flex flex-row h-fit my-auto md:gap-[30px] '}>
                <div className={'flex flex-col group'}>
                    <Link to={"/"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] max-md:px-[10px] sm:text-[20px] md:text-[24px] lg:text-[32px] my-auto font-semibold`}>{t("Home")}</Link>
                    <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-our ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
                <div className={'flex flex-col group'}>
                    <Link to={"/works"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] sm:text-[20px] md:text-[24px] lg:text-[32px] max-md:px-[10px] my-auto font-semibold`}>{t("My projects")}</Link>
                     <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-our ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
                <div className={'flex flex-col group'}>

                    <Link to={"/contact"}
                          className={`${bgBrown ? 'text-brown-main' : 'text-primary-main'} font-serif text-[15px] sm:text-[20px] md:text-[24px] lg:text-[32px] max-md:px-[10px] my-auto font-semibold`}>{t("Contact")}</Link>
                    <div
                        className={`w-0 group-hover:w-full h-[2px] md:h-[4px] transition transition-all duration-300 ease-in-our ${bgBrown? 'bg-brown-light' :  'bg-primary-main/[80%]'} group-hover:cursor-pointer`}></div>
                </div>
            </div>
            <div className={'flex flex-row gap-[10px] md:gap-[20px] text-[20px] align-self-end'}>
                <button className={'md:text-[24px] lg:text-[32px]'} onClick={() => changeLanguage('en')}>🇬🇧</button>
                <button className={'md:text-[24px] lg:text-[32px]'} onClick={() => changeLanguage('vn')}>🇻🇳</button>
            </div>
        </div>
    )
}