import {Experiences} from "../components/landing/Experiences";
import {Hero} from "../components/landing/Hero";
import {About} from "../components/landing/About";
import {Header} from "../components/common/Header";
import {Footer} from "../components/common/Footer";


export function Landing() {

    return (
        <>
            <Header/>
            <Hero />
            <About />
            <Experiences/>
            <Footer/>
        </>

    )
}