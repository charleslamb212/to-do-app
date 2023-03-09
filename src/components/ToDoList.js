import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


// create to do list component
function ToDoList() {
    const [toDoItems, setToDoItems] = useState([]);
    const [newItem, setNewItem] = useState("");


// create a new item
    function handleAddToDoItem(newItem) {   
        // add new item to the list
        setToDoItems([...toDoItems, newItem]);
        setNewItem("");
    }

// handle change
    function handleChange(event) {
        setNewItem(event.target.value);
    }

// handle submit
    function handleSubmit(event) {
        event.preventDefault();
        handleAddToDoItem(newItem);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newItem} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            {toDoItems.map((item, index) => (
                <ToDoItem key={index} item={item} />
            ))}
        </div>   
    )
}

export default ToDoList;