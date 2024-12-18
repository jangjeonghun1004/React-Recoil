# Recoil 설치

```console
npm install recoil
```


# Recoil 설정

**설정**
```console
<RecoilRoot>
  <App />
</RecoilRoot>
```

**폴더 및 파일 추가**
```htm
recoil
  - atoms
    - defaultAtoms.ts
    - ...
  - selectors
    - defaultSelectors.ts
    - ...
```


# atom
```javascript
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
```


# selector
```javascript
import { selector } from "recoil";
import { keyword } from "../atoms/defaultAtoms";
import axios from "axios";

const selectorToDo = selector({
    key: 'selectorToDo',
    get: async ({get}) => {
        console.log(get(keyword));

        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos');

            console.log(result);
            return result;
        } catch(error) {
            console.log(error);
        }
    }
});


export {selectorToDo}
```


# useRecoilValueLoadable & useMemo

```javascript
const todos = useRecoilValueLoadable(selectorToDo);
const todoList = useMemo(() => {
  if(todos.state === 'hasValue' && todos.contents) {
    return <ToDoList data={todos.contents?.data} />
  } else if(todos.state === 'loading') {
    return <span className="loader"></span>
  } else {
    return <Error />
  }
}, [todos]);
```
  

# useRecoilState
```javascript
const [keywordd, setKeywordd] = useRecoilState<string>(keyword);
const handleClick = () => {
    setKeywordd('changed values of keyword.');
};

```


# Axios 설치

```console
npm install axios
```