import {useRef, useState} from "react";
import ToDoItem from "./todoitem";
import "bootstrap/dist/css/bootstrap.min.css";

function Board() {
    
    const [toDoItems, setToDoItems] = useState([]);    

    const inputRef = useRef();
        
    function addToDoItem() {
        //
        // a || b
        // This will see if a is true, and if a is true it will return a.
        // If a is false, it will return b
        let currentInputText = inputRef.current.value || undefined;
        inputRef.current.value="";
        setToDoItems([...toDoItems, {text: currentInputText, id: Date.now()}]);
    }
    
    function handleDelete(id) {
        setToDoItems(toDoItems.filter( (toDo)=> {return toDo.id !== id;}));
    }

    function handleSave(id, newText) {
        let updatedList = [...toDoItems];
        for(let i=0; i<updatedList.length; ++i) {
            let current = updatedList[i];
            if(current.id === id) {
                current.text = newText;
            }
        }
        setToDoItems(updatedList);
    }

    return (
        <>
            <div className="container board mt-3">
                <div className="row text-center">
                    <h1>To Do List:</h1>
                    <p>
                        Click 'Add' to add a new to do and click a 
                        todo to cross it off!
                    </p>
                </div>
                <div className="row justify-center text-center">
                    {toDoItems.map((todo, index) => <ToDoItem 
                                                        key={todo.id} 
                                                        text={todo.text}
                                                        id={todo.id}
                                                        handleDelete={handleDelete}
                                                        handleSave={handleSave}
                                                    />)}
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input type="text" ref={inputRef} className="form-control"
                                   placeholder="Write ToDo Task here..."
                                   aria-label="ToDoInput"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary h-100 m-0"
                                        type="button" onClick={addToDoItem}>
                                    Add
                                </button>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );    
}

export default Board;