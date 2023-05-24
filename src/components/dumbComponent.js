import {useEffect, useState} from "react";

function DumbComponent() {    

    const [counter, setCounter] = useState(0);

    //The function you pass into the useeffect
    //will be called after the component is rendered
    //right after one of the variables in the passed array is updated
    //the passed array can be state variables or properties.

    //IF I do not include the array, the callback will be called with
    //any update!!!!
    
    //If I include an empty array, the callback will be called
    //only once when the component is mounted....

    //If I include items in the array, the callback will only
    //be called when those items are changed.
    useEffect( () => {console.log("callback called");});

    function handleClick() {
        setCounter(counter+1);
    }

    return (<div onClick={handleClick}>
                <h3>Here I am! {counter}</h3>
            </div>);
}

export default DumbComponent;