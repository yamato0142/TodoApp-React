import { useState } from "react";
import { CompleteTodo } from "./CompleteTodo";
import { InCompleteTodo } from "./IncompleteTodo";
import {InputTodo} from "./InputTodo";

export const TodoApp = () => {
    const [todoText, setTodoText] = useState("");

    const [incompleteTodos, setIncompleteTodos] = useState([
        "TODOです1",
        "TODOです2",
    ]);

    const [completeTodos, setcompleteTodos] = useState([
        "TODOでした1",
        "TODOでした2",
    ]);
    
    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    }

    const onClickAdd = () => {
        if (todoText==="") return;

        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDelete = () => {
        alert("削除ボタンです")
    }

    return (
        <>
            <InputTodo 
                todoText={todoText}
                onChange={onChangeTodoText}
                onClickAdd={onClickAdd}
            />

            <InCompleteTodo 
                todos = {incompleteTodos}
                onClickDelete = {onClickDelete}
            />
                
            <CompleteTodo 
                todos = {completeTodos}
            />
        </>
    );
};