import { selector } from "recoil";
import { keywordState, testwordState } from "../atoms/defaultAtoms";
import axios from "axios";

const selectorToDo = selector({
    key: 'selectorToDo',
    get: async ({get}) => {
        console.log(get(keywordState));
        console.log(get(testwordState));

        try {
            return await axios.get('https://jsonplaceholder.typicode.com/todos');
        } catch(error) {
            console.log(error);
        }
    }
});


export {selectorToDo}