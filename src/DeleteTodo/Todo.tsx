import React, { useState } from "react";
import "./DeleteTodo.css";

export type TodoProps = {
    id: string;
    title: string;
    content: string;
    dueDate: string;
    creationdate: string;
    publicationDate: number;
    finished: boolean;
    author: {
        name: string;
        email: string;
      } | null;
}

let hardTodo: TodoProps = {
    id: "1",
    title: "To do the Todos",
    content: "Test",
    dueDate: "string",
    creationdate: "string",
    publicationDate: 10,
    finished: true,
    author: {
        name: "null",
        email: "null"
    }
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const Todo: React.FC<TodoProps> = (props) => {
    let [view, setView] = useState(true);

    async function deleteTodo(): Promise<void> {
        setView(false);
    }

    function finishTodo(): void {

    }

    return (
        <div className="container">
            <h1>Move along now</h1>
            <div className={view ? "todo" : "todo slide-out"}>
                <div className="attributes">
                    <h1>{hardTodo.title}</h1>
                    <p>{hardTodo.content}</p>
                </div>           
                <div className="actions">
                    <button onClick={() => deleteTodo()}>Delete Todo</button>
                    <button onClick={() => finishTodo()}>Finish Todo</button>
                </div>    
            </div>
        </div>
    )
}

export default Todo;