import { atom } from "recoil";

const keyword = atom<string>({
    key: 'keyword',
    default: 'this is a keyword default value.'
});

const testword = atom<string>({
    key: 'testword',
    default: 'this is a testword default value.'
});


export {keyword, testword}