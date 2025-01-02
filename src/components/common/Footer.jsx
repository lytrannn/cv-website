import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

import {t} from "../../i18n/function";
import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";

export function Footer() {
    return (
        <section id={"contact"}
                 className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] lg:!h-[100vh] p-0 items-center justify-center'}>
            <div className={'flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] justify-between w-[80%]'}>
                <div className={'flex flex-col gap-[50px] '}>
                    <TextSlide
                        className={'font-normal italic text-center leading-relaxed lg:text-left font-serif text-primary-main text-5xl lg:text-6xl '}>
                        {t("Feel free to get in touch!")}
                    </TextSlide>
                    <div className={'w-full h-[2px] bg-primary-main'}></div>
                    <div className={'flex flex-row gap-[40px] justify-center lg:justify-start'}>
                        <FadeAnimation delay={0.8} duration={1.3}>
                            <a href={'https://github.com/lytrannn'}>
                                <FontAwesomeIcon icon={faGithub} className={'text-primary-main text-6xl'}/>
                            </a>
                        </FadeAnimation>
                        <FadeAnimation delay={1.4} duration={1.3}>
                            <a href={'https://www.linkedin.com/in/lytrannn'}>
                                <FontAwesomeIcon icon={faLinkedin} className={'text-primary-main text-6xl'}/>
                            </a>
                        </FadeAnimation>
                        <FadeAnimation delay={2} duration={1.3}>
                            <a href={'https://www.facebook.com/lytrannnnnnn'}>
                                <FontAwesomeIcon icon={faFacebook} className={'text-primary-main text-6xl'}/>
                            </a>
                        </FadeAnimation>


                    </div>
                </div>

                <div
                    className={'flex flex-col flex-row text-primary-main text-3xl lg:text-4xl lg:mt-auto gap-[30px]'}>
                    <a href={'mailto:huonglytrannn@gmail.com'} className={'flex flex-row lg:gap-[30px] gap-[10px]'}>
                        <FadeAnimation delay={2.2} duration={1}>
                            <a href={'mailto:huonglytrannn@gmail.com'}
                               className={'flex bg-primary-main rounded-full w-[75px] h-[75px] my-auto'}>
                                <div
                                    className={'flex border-brown-main border-[3px] rounded-full w-[65px] h-[65px] my-auto mx-auto'}>
                                    <FontAwesomeIcon icon={faEnvelope}
                                                     className={'text-brown-main mx-auto my-auto !w-[40px] !h-[40px]'}/>
                                </div>
                            </a>
                        </FadeAnimation>
                        <FadeAnimation delay={2.2} duration={1}>
                            <TextSlide right delay={3000} className={'flex flex-row lg:gap-[30px] gap-[10px]'}>
                                <div className={'flex flex-col lg:gap-[10px]'}>
                                    <h1 className={'text-[26px] max-lg:hidden'}>{t("EMAIL")}</h1>
                                    <p className={'font-serif max-lg:text-[16px] max-lg:my-auto'}
                                    >huonglytrannn@gmail.com</p>
                                </div>
                            </TextSlide>
                        </FadeAnimation>
                    </a>
                    <a href={'tel:+84919624028'} className={'flex flex-row lg:gap-[30px] gap-[10px]'}>
                        <FadeAnimation delay={2.2} duration={1}>
                            <div className={'flex bg-primary-main rounded-full w-[75px] h-[75px] my-auto'}>
                                <div
                                    className={'flex border-brown-main border-[3px] rounded-full w-[65px] h-[65px] my-auto mx-auto'}>
                                    <FontAwesomeIcon icon={faPhone}
                                                     className={'text-brown-main mx-auto my-auto !w-[40px] !h-[40px]'}/>
                                </div>
                            </div>
                        </FadeAnimation>
                        <FadeAnimation delay={2.2} duration={1}>
                            <TextSlide right delay={3000} className={'flex flex-row lg:gap-[30px] gap-[10px]'}>
                                <div className={'flex flex-col lg:gap-[10px]'}>
                                    <h1 className={'text-[26px] max-lg:hidden'}>{t("PHONE")}</h1>
                                    <p className={'font-serif max-lg:text-[16px] max-lg:my-auto'}
                                    > +84 919 624 028</p>
                                </div>
                            </TextSlide>
                        </FadeAnimation>
                    </a>
                </div>
            </div>
        </section>
    )
}