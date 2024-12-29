import {Link} from "react-router-dom";

export function Error404() {
    return (
        <div className={'flex flex-col place-items-center bg-primary-main w-screen h-screen'}>
            <div className={' flex flex-col my-auto'}>
            <div className={'w-fit mx-auto flex flex-row '}>
                <h1 className={'text-[50px] font-bold font-serif border-r-[1px] border-brown-main/[50%] pr-[50px] text-brown-main/[80%]'}>404</h1>
                <h2 className={'text-[30px] font-bold font-serif pl-[50px] text-brown-main/[50%] my-auto h-fit'}>Page not found</h2>
            </div>
            <Link to={'..'} className={'w-fit mx-auto font-serif font-semibold hover:font-bold hover:underline text-brown-main text-[20px] mt-[30px]'}>Go back</Link>
                </div>
        </div>
    )
}