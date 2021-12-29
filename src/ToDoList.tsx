import React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";


interface IForm {
    toDo: string;
}


function ToDoList() {
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = (data:IForm) => {
        setValue("toDo", "")
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input {...register("toDo", {
                required: "required write a To Do"
            })
                   } placeholder="write a to do" />
            <button>Add</button>
        </form>
    </div>
}


// function ToDoList() {
//     const [todo, setTodo] = useState("");
//     const onChange = (event : React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget : {value}, } = event;
//         setTodo(value);
//     };
//     const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(todo);
//     };
//
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={todo} placeholder="write a to do" />
//             <button>Add</button>
//         </form>
//     </div>
// }

// interface IForm {
//     email: string;
//     firstName: string;
//     lastName: string;
//     password: string;
//     password1: string;
//     extraError?: string;
// }
//
// function ToDoList() {
//     const {register, handleSubmit, formState:{errors}, setError} = useForm<IForm>({
//         defaultValues: {
//             email: "@naver.com",
//         }
//     });
//     const onValid = (data:IForm) => {
//         if(data.password !== data.password1){
//             setError("password1", {message: "password are not the same"}, {shouldFocus: true});
//         }
//     }
//
//     console.log(errors)
//     return <div>
//         <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
//             <input {...register("email", {required: 'email required', pattern: {
//                 value: /^[A-Za-z0-9._%+-]+@naver.com/,
//                     message: 'naver.com 주소만 허용합니다.'
//                 } ,})} placeholder="Email" />
//             <span>{errors?.email?.message}</span>
//             <input {...register("firstName", {required: 'first required', validate: {
//                 noNico: (value => value.includes('nico') ? 'no nico allowed' : true),
//                     niNick: (value => value.includes('nick') ? 'no nick allowed' : true),
//                 }})} placeholder="First Name" />
//             <span>{errors?.firstName?.message}</span>
//             <input {...register("lastName", {required: 'last required'})} placeholder="Last Name" />
//             <span>{errors?.lastName?.message}</span>
//             <input {...register("password", {required: 'password1 required', minLength: 5})} placeholder="password" />
//             <span>{errors?.password?.message}</span>
//             <input {...register("password1", {required: "password2 is required", minLength: 5})} placeholder="Password1" />
//             <span>{errors?.password1?.message}</span>
//             <button>Add</button>
//             <span>{errors?.extraError?.message}</span>
//         </form>
//     </div>
//}

export default ToDoList