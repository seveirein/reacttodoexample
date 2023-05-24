import {useState} from 'react';
import PropTypes from 'prop-types';
import "./todoitem.css";

function ToDoItem(props) {    

    const [editString, setEditString] = useState(props.text);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    
    let itemInfo;
    let editButton;
    if(!isEditMode) {
        itemInfo =  (<p style={isCompleted ? {textDecoration: "line-through"} : {}}
                        className="text">{props.text}</p>);

        editButton = (<button 
                        className="btn btn-warning w-75 px-0 m-0 my-1"
                        onClick={() => setIsEditMode(true)}>
                        Edit
                      </button>);
    } else {
        itemInfo = (<input 
                        type="text"
                        className="form-control"
                        value={editString}
                        onChange={(e) => setEditString(e.target.value)}
                    />);

        editButton = (<button
                        className="btn btn-warning w-75 px-0 m-0 my-1"
                        onClick={() => {setIsEditMode(false);
                                        props.handleSave(props.id, editString);}}>                                                                        
                        Save                                
                      </button>);

    }
    
    return (   
        <div className="row gy-3">
            <div className="col-md-8 todo m-auto" 
                 style={isCompleted ? {backgroundColor: "gray"} : {}} 
                 onClick={()=>setIsCompleted(!isCompleted)}>
                <div className="row pt-3 text-box">
                    {itemInfo}
                </div>
                <div className="row">
                    <div className="col-md-2 p-0">
                        <button
                            onClick={() => {props.handleDelete(props.id);}}
                            className="btn btn-danger w-75 px-0 m-0 my-1"
                        >
                            Delete
                        </button>
                    </div>  
                    <div className="col-md-2 p-0">
                        {editButton}
                    </div>
                </div>
            </div>
        </div>
    );    
}

ToDoItem.defaultProps = {
    text: "Untitled To Do item"
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToDoItem;