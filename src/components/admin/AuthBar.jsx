import {useAuth} from "../../lib/useAuth";
import {firebaseConfigured} from "../../lib/firebase";

export function AuthBar() {
    const {user, loading, isEditor, signIn, signOut, error} = useAuth();

    if (!firebaseConfigured) {
        return (
            <div className={'rounded-md bg-yellow-100 text-yellow-900 p-[12px] text-[14px]'}>
                Firebase env vars are missing. Set the <code>VITE_FIREBASE_*</code> values in
                <code> .env.local</code> (or in Netlify) and reload.
            </div>
        );
    }

    if (loading) return <div className={'text-[14px] text-primary-main'}>Loading…</div>;

    if (!user) {
        return (
            <div className={'flex flex-col gap-[8px] items-start'}>
                <button onClick={signIn}
                        className={'bg-primary-main text-brown-main px-[16px] py-[8px] rounded-md font-semibold hover:opacity-80'}>
                    Sign in with Google
                </button>
                {error && (
                    <div className={'text-red-200 text-[13px]'}>{error.message}</div>
                )}
            </div>
        );
    }

    return (
        <div className={'flex flex-row gap-[12px] items-center text-primary-main text-[14px]'}>
            <div className={'flex flex-col'}>
                <span className={'font-semibold'}>{user.displayName || user.email}</span>
                {!isEditor && (
                    <span className={'text-red-300 text-[12px]'}>
                        Signed in, but {user.email} is not on the editor allowlist.
                    </span>
                )}
            </div>
            <button onClick={signOut}
                    className={'border border-primary-main text-primary-main px-[12px] py-[6px] rounded-md hover:bg-primary-main hover:text-brown-main'}>
                Sign out
            </button>
        </div>
    );
}
