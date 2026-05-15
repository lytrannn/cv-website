import {useEffect, useState, useCallback} from 'react';
import {onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import {auth, googleProvider, firebaseConfigured} from './firebase';

// Mirrored in firestore.rules. Lowercase for safe comparison.
const EDITOR_EMAILS = new Set([
    'mikiritrann@gmail.com',
    'huonglytrannn@gmail.com',
]);

export function isEditorEmail(email) {
    return !!email && EDITOR_EMAILS.has(email.toLowerCase());
}

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(firebaseConfigured);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        return onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
    }, []);

    const signIn = useCallback(async () => {
        if (!auth) {
            setError(new Error('Firebase is not configured.'));
            return;
        }
        try {
            setError(null);
            await signInWithPopup(auth, googleProvider);
        } catch (e) {
            setError(e);
        }
    }, []);

    const signOutUser = useCallback(async () => {
        if (auth) await signOut(auth);
    }, []);

    const isEditor = isEditorEmail(user?.email);

    return {user, loading, error, isEditor, signIn, signOut: signOutUser};
}
