import { Fragment } from "react";
import TodoListItems from "../TodoListItems/TodoListItems";
import classes from "../AddTodoListItem/AddTodoListItem.module.css"
import Button from "../Button/Button";
const AddTodoListItem = (props) => {
    const {addList,addUserInput,getUserInput,userInputList,editUserInput,deleteListItem,moveListItem}= props;
    const addInputHandler = () => {
        addUserInput();
    }
const getUserInputHandler = (event) => {
    props.fetchUserInput(event.target.value);
}
    return (
        <Fragment>
            <div className={classes['list-item']}>
                <label htmlFor="userInput">Enter Your Task</label>
                <input  
                value={getUserInput}
                id="getUserInput" 
                name="userInput" 
                type='text' 
                onChange={getUserInputHandler} 
                />
                <Button 
                type="button" 
                title="Add" 
                onClick={addInputHandler}>
                </Button>
            </div>
            <TodoListItems 
            addList={addList}
            userInputList={userInputList} 
            addUserInput={addUserInput} 
            editListItem={editUserInput}
             deleteListItem={deleteListItem} 
             moveListItem={moveListItem} 
             />
        </Fragment>
    );
}

export default AddTodoListItem;