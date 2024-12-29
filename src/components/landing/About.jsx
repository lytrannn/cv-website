export function About() {
    return (
        <section id={"about"}
                 className={'bg-brown-main flex flex-col !w-[100vw]  h-fit py-[50px] md:!h-[100vh] p-0 items-center justify-center'}>
            <div className={'flex flex-col md:flex-row gap-[20px] md:gap-[50px] xl:gap-[100px]'}>
                <div className={`!flex md:!hidden w-[200px] h-[200px] rounded-full bg-cover bg-right-top bg-[url('/imgs/IMG_6305.jpeg')] mx-auto`}/>
                <div className={'flex flex-col gap-[20px] md:gap-[50px] items-start my-auto'}>
                    <h1 className={'font-normal font-serif text-primary-main mx-auto md:mx-0 text-center md:text-left text-[56px]'}>About me</h1>
                    <h1 className={' text-[20px] md:text-[24px] text-primary-main text-center md:text-left  mx-auto w-[80%] md:w-[400px] xl:w-[500px] '}>I am a recent graduate
                        from Royal Melbourne Institute of Technology. I have a background in Economics and
                        Finance. I am also a self-taught
                        programmer. I have experience in Frontend Web Development, Data Analytics and Machine
                        Learning.</h1>
                </div>
                <div className={`!hidden md:!flex md:w-[300px] md:h-[500px] xl:w-[600px] xl:h-[800px] rounded-t-full bg-cover bg-[url('/imgs/IMG_6305.jpeg')]`}/>
            </div>
        </section>
    )
}