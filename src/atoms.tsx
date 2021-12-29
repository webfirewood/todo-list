import {atom, selector} from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    id:number;
    text: string;
    category: Categories
}

export const categoryState = atom<Categories>({
    key:"category",
    default:Categories.TO_DO,
})

const localData = localStorage.getItem('toDos');

export const toDoState = atom<IToDo[]>({
    key:"toDO",
    default: localData === null ? [] : JSON.parse(localData as string),
});

export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        if(category === Categories.TO_DO) return toDos.filter(toDo => toDo.category === Categories.TO_DO);
        if(category === Categories.DOING) return toDos.filter(toDo => toDo.category === Categories.DOING);
        if(category === Categories.DONE) return toDos.filter(toDo => toDo.category === Categories.DONE);
    },
})