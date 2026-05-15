import {useState} from "react";
import {Header} from "../components/common/Header";
import {AuthBar} from "../components/admin/AuthBar";
import {SectionEditor} from "../components/admin/SectionEditor";
import {useAuth} from "../lib/useAuth";

const SECTION_TABS = [
    {key: 'hero', label: 'Hero'},
    {key: 'about', label: 'About'},
    {key: 'experiences', label: 'Experiences'},
    {key: 'projects', label: 'Projects'},
    {key: 'footer', label: 'Footer'},
];

export function Admin() {
    const {isEditor} = useAuth();
    const [active, setActive] = useState('hero');

    return (
        <>
            <Header/>
            <main className={'bg-primary-main !min-h-[100vh] !w-[100vw] flex flex-col items-center py-[40px] px-[20px]'}>
                <div className={'w-full max-w-[1000px] flex flex-col gap-[24px]'}>
                    <div className={'flex flex-row items-center justify-between flex-wrap gap-[12px] bg-brown-main rounded-md p-[16px]'}>
                        <div>
                            <h1 className={'text-primary-main text-[28px] font-serif'}>Content editor</h1>
                            <p className={'text-primary-main/[80%] text-[13px]'}>
                                Edits save to Firestore and update the live site on next load.
                            </p>
                        </div>
                        <AuthBar/>
                    </div>

                    {!isEditor ? (
                        <div className={'bg-yellow-50 border border-yellow-300 rounded-md p-[16px] text-yellow-900 text-[14px]'}>
                            Sign in with an allowlisted Google account to edit content. Anyone can
                            view the current values below, but Save is disabled.
                        </div>
                    ) : null}

                    <div className={'flex flex-row gap-[8px] flex-wrap'}>
                        {SECTION_TABS.map((s) => (
                            <button key={s.key}
                                    onClick={() => setActive(s.key)}
                                    className={`px-[14px] py-[8px] rounded-md text-[14px] font-semibold border ${
                                        active === s.key
                                            ? 'bg-brown-main text-primary-main border-brown-main'
                                            : 'bg-transparent text-brown-main border-brown-main/[40%] hover:bg-brown-main/[10%]'
                                    }`}>
                                {s.label}
                            </button>
                        ))}
                    </div>

                    <SectionEditor section={active} canSave={isEditor}/>
                </div>
            </main>
        </>
    );
}
