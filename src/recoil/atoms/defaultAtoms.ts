import { atom } from "recoil";

const keywordState = atom<string>({
    key: 'keywordState',
    default: 'this is a keyword default value.'
});

const testwordState = atom<string>({
    key: 'testwordState',
    default: 'this is a testword default value.'
});


export {keywordState, testwordState}