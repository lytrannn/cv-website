import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJs, faPython} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {t} from "../../i18n/function";

export function Experiences() {
    // const {t} = useTranslation();

    return (
        <section id={"experiences"}
                 className={'bg-primary-main flex flex-col xl:!w-[100vw] !h-fit py-[100px] xl:py-[50px] xl:!h-[100vh] p-0 items-center justify-center'}>
            <h1 className={'font-normal font-serif text-brown-main text-[56px] text-center'}>{t("Relevant experience")}</h1>
            <div className={'flex flex-col xl:flex-row w-fit mx-auto mt-[150px] gap-[50px] xl:gap-[75px]'}>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                            <FontAwesomeIcon icon={faJs}
                                             className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[80%] mx-auto'}> {t("Frontend Web Development")}</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}> {t("I've contributed to React/TypeScript apps through my part-time job")} </h1>
                    <Link to={'/works#frontend'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}> {t("See more")}</Link>
                </div>
                 <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                            <img src={'/imgs/R.svg'} className={'!w-[80px] !h-[80px] mx-auto my-auto'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}> {t("Data Analytics")}</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}> {t("I've used R for Econometrics assignments on empirical analysis")} </h1>
                    <Link to={'/works#analytics'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}>{t("See more")}</Link>
                </div>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                          <img src={'/imgs/jupyter.svg'} className={'!w-[80px] !h-[80px] mx-auto my-auto'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}>{t("Machine Learning")}</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[22px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}>{t("I've taken a Machine Learning course during my time in university")}</h1>
                    <Link to={'/works#analytics'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}>{t("See more")}</Link>

                </div>

            </div>
        </section>
    )
}