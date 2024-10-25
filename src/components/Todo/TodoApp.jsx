import { useState } from "react";
import { CompleteTodo } from "./CompleteTodo";
import { InCompleteTodo } from "./IncompleteTodo";
import {InputTodo} from "./InputTodo";

export const TodoApp = () => {
    const [incompleteTodos, setIncompleteTodos] = useState([
        "TODOです1",
        "TODOです2",
    ]);

    const [completeTodos, setcompleteTodos] = useState([
        "TODOでした1",
        "TODOでした2",
    ]);

    return (
        <>
            <InputTodo>
            
            </InputTodo>

            <InCompleteTodo 
                todos = {incompleteTodos}
            />
                
            <CompleteTodo 
                todos = {completeTodos}
            />
        </>
    );
};