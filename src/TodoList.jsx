import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    
    //Delete the Todo

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    //Update All in Arrays

    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            });
        });
    };
    
    //Update on Element in Array

    let UpperCaseOne = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            });
        });
    };
    
    //Done All Todo

    let DoneAllTodo = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            });
        });
    };
    
    //Done one Todo

    let DoneTodoOne = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            });
        });
    };
    
    return (
        <div>
            <input placeholder="Add a task" type="text" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br /><br /><br />

            <h4>Task Todo!</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => UpperCaseOne(todo.id)}>Uppercase One</button>
                        <button onClick={() => DoneTodoOne(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={upperCaseAll}>Uppercase All</button>
            <button onClick={DoneAllTodo}>DoneAll</button>
        </div>
    );
}
