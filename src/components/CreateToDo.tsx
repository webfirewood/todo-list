import React from "react";
import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from "../atoms";

interface IForm {
    toDo: string;

}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = (data:IForm) => {
        setToDos(oldToDOs => {
            const result = [{id: Date.now(), text: data.toDo, category}, ...oldToDOs];
            localStorage.setItem('toDos', JSON.stringify(result));
            return result;
            }
        )
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo")} placeholder="pleas write" />
            <button>Add</button>
        </form>
    )

}

export default CreateToDo