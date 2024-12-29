import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
    return (
         <section id={"about"}
                 className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] lg:!h-[100vh] p-0 items-center justify-center'}>
            <div className={'flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] justify-between w-[80%]'}>
                <div className={'flex flex-col gap-[50px] '}>
                    <h1 className={'font-normal italic text-center leading-relaxed lg:text-left font-serif text-primary-main text-5xl lg:text-6xl '}>
                        Feel free to get in touch!
                    </h1>
                    <div className={'w-full h-[2px] bg-primary-main'}></div>
                    <div className={'flex flex-row gap-[40px] justify-center lg:justify-start'}>
                        <FontAwesomeIcon icon={faGithub} className={'text-primary-main text-6xl'}/>
                        <FontAwesomeIcon icon={faLinkedin} className={'text-primary-main text-6xl'}/>
                        <FontAwesomeIcon icon={faFacebook} className={'text-primary-main text-6xl'}/>


                    </div>
                </div>
                <div
                    className={'flex flex-col  text-primary-main text-3xl lg:text-4xl lg:mt-auto gap-[30px]'}>
                    <div className={'flex flex-row lg:gap-[30px] gap-[10px]'}>

                        <a href={'mailto:huonglytrannn@gmail.com'}
                           className={'flex bg-primary-main rounded-full w-[75px] h-[75px] my-auto'}>
                            <div
                                className={'flex border-brown-main border-[3px] rounded-full w-[65px] h-[65px] my-auto mx-auto'}>
                                <FontAwesomeIcon icon={faEnvelope}
                                                 className={'text-brown-main mx-auto my-auto !w-[40px] !h-[40px]'}/>
                            </div>
                        </a>
                        <div className={'flex flex-col lg:gap-[10px]'}>
                            <h1 className={'text-[26px] max-lg:hidden'}>EMAIL</h1>
                            <a className={'font-serif max-lg:text-[16px] max-lg:my-auto'}
                               href={'mailto:huonglytrannn@gmail.com'}>huonglytrannn@gmail.com</a>
                        </div>

                    </div>
                    <a href={'tel:+84919624028'} className={'flex flex-row lg:gap-[30px] gap-[10px]'}>
                        <div className={'flex bg-primary-main rounded-full w-[75px] h-[75px] my-auto'}>
                            <div
                                className={'flex border-brown-main border-[3px] rounded-full w-[65px] h-[65px] my-auto mx-auto'}>
                                <FontAwesomeIcon icon={faPhone}
                                                 className={'text-brown-main mx-auto my-auto !w-[40px] !h-[40px]'}/>
                            </div>
                        </div>
                        <div className={'flex flex-col lg:gap-[10px]'}>
                            <h1 className={'text-[26px] max-lg:hidden'}>PHONE</h1>
                            <a className={'font-serif max-lg:text-[16px] max-lg:my-auto'}
                               href={'tel:+84919624028'}> +84 919 624 028</a>
                        </div>

                    </a>
                </div>
            </div>
        </section>
    )
}