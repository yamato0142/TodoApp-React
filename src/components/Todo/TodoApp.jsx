import { useState } from "react";
import { CompleteTodo } from "./CompleteTodo";
import { InCompleteTodo } from "./IncompleteTodo";
import {InputTodo} from "./InputTodo";

export const TodoApp = () => {
    const [todoText, setTodoText] = useState("fff");

    const [incompleteTodos, setIncompleteTodos] = useState([
        "TODOです1",
        "TODOです2",
    ]);

    const [completeTodos, setcompleteTodos] = useState([
        "TODOでした1",
        "TODOでした2",
    ]);

    const onClickAdd = () => {
        alert();
    }

    return (
        <>
            <InputTodo 
                todoText={todoText}
                onClickAdd={onClickAdd}
            />

            <InCompleteTodo 
                todos = {incompleteTodos}
            />
                
            <CompleteTodo 
                todos = {completeTodos}
            />
        </>
    );
};