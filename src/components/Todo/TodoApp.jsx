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

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setcompleteTodos(newCompleteTodos);
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setcompleteTodos(newCompleteTodos);
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
                onClickComplete = {onClickComplete}
                onClickDelete = {onClickDelete}
            />
                
            <CompleteTodo 
                todos = {completeTodos}
                onClickBack = {onClickBack}
            />
        </>
    );
};