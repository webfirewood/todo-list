import React from "react";
import {Categories, IToDo, toDoState} from "../atoms";
import {useRecoilState, useSetRecoilState} from "recoil";

function ToDo({text, category, id}:IToDo) {
    // const setToDos = useSetRecoilState(toDoState);
    const [toDos, setToDos] = useRecoilState(toDoState)
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = event;
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category: name as any};
            const result = [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex+1)];
            localStorage.setItem('toDos', JSON.stringify(result));

            return result
        });
    };
    const onRemove  = (event:React.MouseEvent<HTMLButtonElement>) => {
        setToDos(oldToDos => {
            const selectToDo = toDos.filter(toDo => toDo.id !== id);
            localStorage.setItem('toDos', JSON.stringify(selectToDo));
            return selectToDo;
        })

    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
            <button onClick={onRemove}>Del</button>
        </li>
    )
}

export default ToDo;