import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addToHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div>
            <form onSubmit={addToHandler}>
                <input
                    type="text"
                    placeholder="Enter todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add to do</button>
            </form>
        </div>
    );
}
