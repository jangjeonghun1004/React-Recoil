import { selector } from "recoil";
import { keywordAtom, testwordAtom } from "../atoms/defaultAtoms";
import axios from "axios";

const selectorToDo = selector({
    key: 'selectorToDo',
    get: async ({get}) => {
        console.log(get(keywordAtom));
        console.log(get(testwordAtom));

        try {
            return await axios.get('https://jsonplaceholder.typicode.com/todos');
        } catch(error) {
            console.log(error);
        }
    }
});


export {selectorToDo}