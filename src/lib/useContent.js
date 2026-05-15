import {useEffect, useState, useCallback} from 'react';
import {doc, getDoc, onSnapshot, setDoc} from 'firebase/firestore';
import {db, firebaseConfigured} from './firebase';
import {SECTIONS} from './defaults';

const COLLECTION = 'content';

// Subscribe to a section's Firestore doc and merge it over the hardcoded
// default so the UI keeps working even before anyone has saved anything.
export function useContent(section) {
    const fallback = SECTIONS[section];
    if (fallback === undefined) {
        throw new Error(`useContent: unknown section "${section}"`);
    }
    const [content, setContent] = useState(fallback);
    const [loading, setLoading] = useState(firebaseConfigured);

    useEffect(() => {
        if (!db) {
            setLoading(false);
            return;
        }
        const ref = doc(db, COLLECTION, section);
        const unsub = onSnapshot(
            ref,
            (snap) => {
                if (snap.exists()) {
                    setContent({...fallback, ...snap.data()});
                } else {
                    setContent(fallback);
                }
                setLoading(false);
            },
            () => setLoading(false), // on error keep fallback
        );
        return unsub;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [section]);

    return {content, loading};
}

// One-shot read — used by the admin form to seed itself.
export async function fetchContent(section) {
    const fallback = SECTIONS[section];
    if (!db) return fallback;
    const snap = await getDoc(doc(db, COLLECTION, section));
    return snap.exists() ? {...fallback, ...snap.data()} : fallback;
}

export async function saveContent(section, data) {
    if (!db) throw new Error('Firestore is not configured.');
    await setDoc(doc(db, COLLECTION, section), data, {merge: false});
}

export function useSaveContent() {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const save = useCallback(async (section, data) => {
        setSaving(true);
        setError(null);
        try {
            await saveContent(section, data);
        } catch (e) {
            setError(e);
            throw e;
        } finally {
            setSaving(false);
        }
    }, []);
    return {save, saving, error};
}
