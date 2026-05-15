import {useAuth} from "../../lib/useAuth";
import {Error404} from "../../routes/Error404";

// Gate the site behind the editor allowlist. Anyone who isn't signed in
// as one of the two emails sees the standard Error404 page — same look,
// same wording — so the site reads as "under update" without leaking
// what's coming. The /admin route is the only ungated entry point so
// the owners can still sign in.
export function Gate({children}) {
    const {isEditor, loading} = useAuth();
    if (loading) return null;
    if (!isEditor) return <Error404/>;
    return children;
}
