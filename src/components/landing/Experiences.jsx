import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJs, faPython} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {t} from "../../i18n/function";
import {FadeAnimation, TextSlide} from "@deepsel/lake-ui";

export function Experiences() {
    // const {t} = useTranslation();

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('contact');
        nextSection && nextSection.scrollIntoView({behavior: 'smooth'});

    }
    return (
        <section id={"experiences"}
                 className={'bg-primary-main flex flex-col xl:!w-[100vw] !h-fit py-[100px] xl:py-[50px] xl:!h-[100vh] p-0 items-center justify-center'}>
            <FadeAnimation duration={1.5}>
                <TextSlide
                    className={'font-normal font-serif text-brown-main text-[56px] text-center'}>{t("Relevant experience")}</TextSlide>
            </FadeAnimation>
            <div className={'flex flex-col xl:flex-row w-fit mx-auto mt-[150px] gap-[50px] xl:gap-[75px]'}>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <FadeAnimation delay={1} duration={1.5}>
                        <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                            <div
                                className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                                <FontAwesomeIcon icon={faJs}
                                                 className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>
                            </div>
                        </div>
                    </FadeAnimation>
                    <TextSlide delay={2000}
                               className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[80%] mx-auto'}> {t("Frontend Web Development")}</TextSlide>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <TextSlide delay={2500}
                               className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[120px]'}> {t("I've contributed to React/TypeScript apps through my part-time job")} </TextSlide>
                    <FadeAnimation delay={3} duration={2} className={' flex place-self-end xl:mt-[20px] mx-auto'}>
                        <TextSlide delay={3000}>
                            <Link to={'/works#frontend'}
                                  className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] '}>{t("See more")}</Link>
                        </TextSlide>
                    </FadeAnimation>
                </div>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <FadeAnimation delay={1} duration={1.5}>
                        <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                            <div
                                className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                                <img src={'/imgs/R.svg'} className={'!w-[80px] !h-[80px] mx-auto my-auto'}/>
                            </div>
                        </div>
                    </FadeAnimation>
                    <TextSlide delay={2000}
                               className={'font-serif mt-[20px] xl:mt-[50px] !w-fit text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}> {t("Data Analytics")}</TextSlide>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <TextSlide delay={2500}
                               className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[120px] '}> {t("I've used R for Econometrics assignments on empirical analysis")} </TextSlide>
                    <FadeAnimation delay={3} duration={2} className={' flex place-self-end xl:mt-[20px] mx-auto'}>
                        <TextSlide delay={3000}>
                            <Link to={'/works#analytics'}
                                  className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] '}>{t("See more")}</Link>
                        </TextSlide>
                    </FadeAnimation>
                </div>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <FadeAnimation delay={1} duration={1.5}>
                        <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                            <div
                                className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                                 <FontAwesomeIcon icon={faPython}
                                                 className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>
                            </div>
                        </div>
                    </FadeAnimation>
                    <TextSlide delay={2000}
                               className={' !w-fit font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}>{t("Machine Learning")}</TextSlide>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <TextSlide delay={2500}
                               className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[120px]'}>{t("I've taken a Machine Learning course during my time in university")}</TextSlide>
                    <FadeAnimation delay={3} duration={2} className={' flex place-self-end xl:mt-[20px] mx-auto'}>
                        <TextSlide delay={3000}>
                            <Link to={'/works#analytics'}
                                  className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] '}>{t("See more")}</Link>
                        </TextSlide>
                    </FadeAnimation>

                </div>

            </div>
              <FadeAnimation delay={1.8} duration={2}>
                    <TextSlide delay={1800} duration={'2000ms'}>
                        <button
                            className={'flex flex-col mt-[40px] text-[24px] group text-brown-main font-semibold hover:font-bold p-[10px] rounded-[10px]'}
                            onClick={scrollToNextSection}>{t("Get in touch!")} <img
                            src={'/imgs/double-arrow-down-brown.svg'}
                            className={'w-[24px] h-[24px] group-hover:w-[30px] mx-auto mt-[10px]'}/>
                        </button>
                    </TextSlide>
                </FadeAnimation>

        </section>
    )
}