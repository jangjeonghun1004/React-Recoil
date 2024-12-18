import { atom } from "recoil";

const keywordAtom = atom<string>({
    key: 'keywordAtom',
    default: 'this is a keyword default value.'
});

const testwordAtom = atom<string>({
    key: 'testwordAtom',
    default: 'this is a testword default value.'
});


export {keywordAtom, testwordAtom}