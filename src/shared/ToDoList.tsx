import { ToDoEntity } from "../entity/ToDoEntity";

type Props = {
    data:ToDoEntity[]
}


function ToDoList({data}:Props) {
    return (
       <ul>
            {data.map((item) => <li key={item.id}>{item.title}</li>)}
       </ul>
    );
}

export default ToDoList;