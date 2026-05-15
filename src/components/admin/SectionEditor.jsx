import {useEffect, useState} from "react";
import {fetchContent, useSaveContent} from "../../lib/useContent";
import {SECTIONS} from "../../lib/defaults";

// Renders the right input control for a value. Strings -> text/textarea,
// arrays-of-strings -> tag list, arrays-of-objects -> repeated subform.
function FieldEditor({label, value, onChange, longText}) {
    return (
        <label className={'flex flex-col gap-[4px]'}>
            <span className={'text-[13px] font-semibold uppercase tracking-wide text-brown-main/[70%]'}>{label}</span>
            {longText ? (
                <textarea
                    value={value ?? ''}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                    className={'border border-brown-main/[40%] rounded-md p-[8px] font-serif text-[15px] bg-white'}
                />
            ) : (
                <input
                    type={'text'}
                    value={value ?? ''}
                    onChange={(e) => onChange(e.target.value)}
                    className={'border border-brown-main/[40%] rounded-md p-[8px] font-serif text-[15px] bg-white'}
                />
            )}
        </label>
    );
}

// Editor for a localised field — stores { en, vn } so the public site
// can serve the right language. Accepts a legacy plain string and
// promotes it to the object shape on first edit.
function LocalizedFieldEditor({label, value, onChange, longText}) {
    const obj = (value && typeof value === 'object')
        ? value
        : {en: value || '', vn: value || ''};
    const setLang = (lng) => (e) => onChange({...obj, [lng]: e.target.value});
    const Input = longText ? 'textarea' : 'input';
    const inputProps = longText ? {rows: 4} : {type: 'text'};
    return (
        <div className={'flex flex-col gap-[6px]'}>
            <span className={'text-[13px] font-semibold uppercase tracking-wide text-brown-main/[70%]'}>{label}</span>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-[8px]'}>
                <label className={'flex flex-col gap-[2px]'}>
                    <span className={'text-[11px] uppercase tracking-wider text-brown-main/[50%]'}>EN 🇬🇧</span>
                    <Input
                        {...inputProps}
                        value={obj.en ?? ''}
                        onChange={setLang('en')}
                        className={'border border-brown-main/[40%] rounded-md p-[8px] font-serif text-[15px] bg-white'}
                    />
                </label>
                <label className={'flex flex-col gap-[2px]'}>
                    <span className={'text-[11px] uppercase tracking-wider text-brown-main/[50%]'}>VN 🇻🇳</span>
                    <Input
                        {...inputProps}
                        value={obj.vn ?? ''}
                        onChange={setLang('vn')}
                        className={'border border-brown-main/[40%] rounded-md p-[8px] font-serif text-[15px] bg-white'}
                    />
                </label>
            </div>
        </div>
    );
}

function StringListEditor({label, value, onChange}) {
    const list = Array.isArray(value) ? value : [];
    const update = (next) => onChange(next);
    return (
        <div className={'flex flex-col gap-[6px]'}>
            <span className={'text-[13px] font-semibold uppercase tracking-wide text-brown-main/[70%]'}>{label}</span>
            <div className={'flex flex-wrap gap-[6px]'}>
                {list.map((item, i) => (
                    <span key={i}
                          className={'flex flex-row items-center gap-[4px] bg-brown-light text-primary-main rounded-md px-[8px] py-[4px] text-[13px]'}>
                        <input
                            type={'text'}
                            value={item}
                            onChange={(e) => update(list.map((v, j) => j === i ? e.target.value : v))}
                            className={'bg-transparent outline-none w-[120px]'}
                        />
                        <button type={'button'}
                                onClick={() => update(list.filter((_, j) => j !== i))}
                                className={'text-primary-main/[80%] hover:text-white'}>×</button>
                    </span>
                ))}
                <button type={'button'}
                        onClick={() => update([...list, ''])}
                        className={'border border-brown-main/[40%] rounded-md px-[8px] py-[4px] text-[13px] hover:bg-brown-light hover:text-primary-main'}>
                    + add
                </button>
            </div>
        </div>
    );
}

function ListEditor({label, items, defaults, fields, onChange}) {
    const arr = Array.isArray(items) ? items : [];
    const update = (next) => onChange(next);
    return (
        <div className={'flex flex-col gap-[12px]'}>
            <div className={'flex flex-row items-center justify-between'}>
                <span className={'text-[13px] font-semibold uppercase tracking-wide text-brown-main/[70%]'}>{label}</span>
                <button type={'button'}
                        onClick={() => update([...arr, {...defaults}])}
                        className={'bg-brown-main text-primary-main rounded-md px-[10px] py-[4px] text-[13px] hover:opacity-80'}>
                    + add item
                </button>
            </div>
            <div className={'flex flex-col gap-[10px]'}>
                {arr.map((item, i) => (
                    <div key={i}
                         className={'border border-brown-main/[30%] rounded-md p-[12px] flex flex-col gap-[8px] bg-primary-main/[40%]'}>
                        <div className={'flex flex-row justify-between items-center'}>
                            <span className={'text-[12px] text-brown-main/[60%]'}>#{i + 1}</span>
                            <div className={'flex flex-row gap-[6px]'}>
                                <button type={'button'} disabled={i === 0}
                                        onClick={() => {
                                            const next = arr.slice();
                                            [next[i - 1], next[i]] = [next[i], next[i - 1]];
                                            update(next);
                                        }}
                                        className={'text-[12px] disabled:opacity-30'}>↑</button>
                                <button type={'button'} disabled={i === arr.length - 1}
                                        onClick={() => {
                                            const next = arr.slice();
                                            [next[i + 1], next[i]] = [next[i], next[i + 1]];
                                            update(next);
                                        }}
                                        className={'text-[12px] disabled:opacity-30'}>↓</button>
                                <button type={'button'}
                                        onClick={() => update(arr.filter((_, j) => j !== i))}
                                        className={'text-[12px] text-red-700 hover:text-red-900'}>delete</button>
                            </div>
                        </div>
                        {fields.map(({key, label: fieldLabel, longText, kind, options}) => {
                            const v = item?.[key];
                            const setField = (val) => update(arr.map((it, j) => j === i ? {...it, [key]: val} : it));
                            if (kind === 'stringList') {
                                return <StringListEditor key={key} label={fieldLabel} value={v} onChange={setField}/>;
                            }
                            if (kind === 'select') {
                                return (
                                    <label key={key} className={'flex flex-col gap-[4px]'}>
                                        <span className={'text-[13px] font-semibold uppercase tracking-wide text-brown-main/[70%]'}>{fieldLabel}</span>
                                        <select
                                            value={v ?? ''}
                                            onChange={(e) => setField(e.target.value)}
                                            className={'border border-brown-main/[40%] rounded-md p-[8px] font-serif text-[15px] bg-white'}>
                                            <option value={''}>—</option>
                                            {options.map((o) => <option key={o} value={o}>{o}</option>)}
                                        </select>
                                    </label>
                                );
                            }
                            if (kind === 'localizedText' || kind === 'localizedTextarea') {
                                return <LocalizedFieldEditor key={key} label={fieldLabel} value={v}
                                                             longText={kind === 'localizedTextarea'}
                                                             onChange={setField}/>;
                            }
                            return <FieldEditor key={key} label={fieldLabel} value={v}
                                                longText={longText} onChange={setField}/>;
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Per-section field schema. Keeps the form generic — adding a new section
// only needs an entry in defaults.js plus an entry here.
const SCHEMAS = {
    hero: {
        title: 'Hero',
        fields: [
            {key: 'greeting', label: 'Greeting', kind: 'localizedText'},
            {key: 'name', label: 'Name line', kind: 'localizedText'},
            {key: 'tagline1', label: 'Tagline 1', kind: 'localizedTextarea'},
            {key: 'tagline2', label: 'Tagline 2', kind: 'localizedText'},
            {key: 'ctaLabel', label: 'CTA label', kind: 'localizedText'},
        ],
    },
    about: {
        title: 'About',
        fields: [
            {key: 'heading', label: 'Heading', kind: 'localizedText'},
            {key: 'body', label: 'Body', kind: 'localizedTextarea'},
            {key: 'ctaLabel', label: 'CTA label', kind: 'localizedText'},
        ],
    },
    experiences: {
        title: 'Experiences',
        fields: [
            {key: 'heading', label: 'Heading', kind: 'localizedText'},
            {key: 'ctaLabel', label: 'CTA label', kind: 'localizedText'},
            {
                key: 'items',
                label: 'Items',
                kind: 'list',
                itemDefaults: {id: '', iconKey: 'js', title: {en: '', vn: ''}, blurb: {en: '', vn: ''}, link: '', linkLabel: {en: 'See more', vn: 'Xem thêm'}},
                itemFields: [
                    {key: 'id', label: 'ID (stable slug, referenced by profiles)'},
                    {key: 'iconKey', label: 'Icon', kind: 'select', options: ['js', 'r', 'python']},
                    {key: 'title', label: 'Title', kind: 'localizedText'},
                    {key: 'blurb', label: 'Blurb', kind: 'localizedTextarea'},
                    {key: 'link', label: 'Link (e.g. /works?profile=frontend)'},
                    {key: 'linkLabel', label: 'Link label', kind: 'localizedText'},
                ],
            },
        ],
    },
    projects: {
        title: 'Projects',
        fields: [
            {
                key: 'items',
                label: 'Projects',
                kind: 'list',
                itemDefaults: {title: {en: '', vn: ''}, type: 'frontend', url: '', photo: '', tags: []},
                itemFields: [
                    {key: 'title', label: 'Title', kind: 'localizedText'},
                    {key: 'type', label: 'Type (referenced by profiles, e.g. frontend, data, backend)'},
                    {key: 'url', label: 'URL'},
                    {key: 'photo', label: 'Photo path (e.g. /imgs/projects/x.svg)'},
                    {key: 'tags', label: 'Tags', kind: 'stringList'},
                ],
            },
        ],
    },
    profiles: {
        title: 'Profiles',
        fields: [
            {key: 'defaultId', label: 'Default profile ID (loaded when no ?profile= is set on /works)'},
            {
                key: 'items',
                label: 'Profiles',
                kind: 'list',
                itemDefaults: {id: '', label: {en: '', vn: ''}, projectTypes: [], experienceIds: []},
                itemFields: [
                    {key: 'id', label: 'ID (slug used in ?profile=…)'},
                    {key: 'label', label: 'Display label (the Works tab name)', kind: 'localizedText'},
                    {key: 'projectTypes', label: 'Project types in this profile', kind: 'stringList'},
                    {key: 'experienceIds', label: 'Experience IDs to keep (others are archived)', kind: 'stringList'},
                ],
            },
        ],
    },
    footer: {
        title: 'Footer',
        fields: [
            {key: 'heading', label: 'Heading', kind: 'localizedText'},
            {key: 'email', label: 'Email'},
            {key: 'phone', label: 'Phone (with country code)'},
            {key: 'github', label: 'GitHub URL'},
            {key: 'linkedin', label: 'LinkedIn URL'},
            {key: 'facebook', label: 'Facebook URL'},
        ],
    },
};

export function SectionEditor({section, canSave}) {
    const schema = SCHEMAS[section];
    const fallback = SECTIONS[section];
    const [data, setData] = useState(fallback);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);
    const {save, saving, error: saveError} = useSaveContent();

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetchContent(section)
            .then((d) => {
                if (!cancelled) setData(d);
            })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, [section]);

    if (!schema) return <div>Unknown section: {section}</div>;

    const setField = (key) => (v) => setData((d) => ({...d, [key]: v}));

    const handleSave = async (e) => {
        e.preventDefault();
        setStatus(null);
        try {
            await save(section, data);
            setStatus('Saved.');
        } catch {
            setStatus(null);
        }
    };

    return (
        <form onSubmit={handleSave}
              className={'flex flex-col gap-[16px] bg-primary-main/[60%] p-[20px] rounded-md border border-brown-main/[20%]'}>
            <div className={'flex flex-row items-center justify-between'}>
                <h2 className={'text-[24px] font-serif text-brown-main'}>{schema.title}</h2>
                <div className={'flex flex-row gap-[8px] items-center'}>
                    {status && <span className={'text-green-800 text-[13px]'}>{status}</span>}
                    {saveError && <span className={'text-red-700 text-[13px]'}>{saveError.message}</span>}
                    <button type={'submit'}
                            disabled={!canSave || saving || loading}
                            className={'bg-brown-main text-primary-main px-[16px] py-[8px] rounded-md font-semibold disabled:opacity-40'}>
                        {saving ? 'Saving…' : 'Save'}
                    </button>
                </div>
            </div>

            {loading ? (
                <div className={'text-brown-main/[60%]'}>Loading current content…</div>
            ) : (
                schema.fields.map((f) => {
                    if (f.kind === 'list') {
                        return (
                            <ListEditor key={f.key}
                                        label={f.label}
                                        items={data[f.key]}
                                        defaults={f.itemDefaults}
                                        fields={f.itemFields}
                                        onChange={setField(f.key)}/>
                        );
                    }
                    if (f.kind === 'localizedText' || f.kind === 'localizedTextarea') {
                        return (
                            <LocalizedFieldEditor key={f.key}
                                                  label={f.label}
                                                  value={data[f.key]}
                                                  longText={f.kind === 'localizedTextarea'}
                                                  onChange={setField(f.key)}/>
                        );
                    }
                    return (
                        <FieldEditor key={f.key}
                                     label={f.label}
                                     value={data[f.key]}
                                     longText={f.longText}
                                     onChange={setField(f.key)}/>
                    );
                })
            )}
        </form>
    );
}
