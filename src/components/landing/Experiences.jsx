import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJs, faPython} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

export function Experiences() {

    return (
        <section id={"experiences"}
                 className={'bg-primary-main flex flex-col xl:!w-[100vw] !h-fit py-[100px] xl:py-[50px] xl:!h-[100vh] p-0 items-center justify-center'}>
            <h1 className={'font-normal font-serif text-brown-main text-[56px] text-center'}>Relevant experiences</h1>
            <div className={'flex flex-col xl:flex-row w-fit mx-auto mt-[150px] gap-[50px] xl:gap-[75px]'}>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                            <FontAwesomeIcon icon={faJs}
                                             className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[80%] mx-auto'}> Frontend Web
                        Development</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[24px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}> I've contributed to React apps </h1>
                    <Link to={'/works'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}>See
                        more</Link>
                </div>
                 <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                            <img src={'/imgs/R.svg'} className={'!w-[80px] !h-[80px] mx-auto my-auto'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}> Data Analytics</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[24px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}> I've used R for Econometrics assignments </h1>
                    <Link to={'/works'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}>See
                        more</Link>
                </div>
                <div className={'flex flex-col xl:w-[300px] w-[80%] mx-auto'}>
                    <div className={'flex mx-auto bg-brown-main rounded-full w-[150px] h-[150px]'}>
                        <div
                            className={'flex border-primary-main border-[3px] rounded-full w-[140px] h-[140px] my-auto mx-auto'}>
                           <FontAwesomeIcon icon={faPython}
                                             className={'text-primary-main mx-auto my-auto !w-[63px] !h-[63px]'}/>
                        </div>
                    </div>
                    <h1 className={'font-serif mt-[20px] xl:mt-[50px] text-[32px] p-[16px] text-center w-fit xl:h-[130px] xl:w-[50%] mx-auto'}>Machine Learning</h1>
                    <div className={'h-[2px] xl:w-[300px] w-full bg-brown-main mb-[16px] mx-auto'}/>
                    <h1 className={' text-[24px] p-[16px] text-center mx-auto h-fit xl:h-[110px]'}>I've had experience with Machine Learning during uni</h1>
                    <Link to={'/works'}
                          className={'text-brown-main font-semibold hover:font-bold p-[10px] mx-auto w-fit text-[20px] xl:text-[32px] xl:mt-[20px]'}>See
                        more</Link>

                </div>

            </div>
        </section>
    )
}