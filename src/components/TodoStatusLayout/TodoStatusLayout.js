
import AddTodoListItem from '../AddTodoListItem/AddTodoListItem';
import TodoListItems from '../TodoListItems/TodoListItems';
import classes from './TodoStatusLayout.module.css';

import { Fragment } from 'react';





const TodoStatusLayout = props => {
    const {setUserInputValue,title,AddList,getUserInput,fetchUserInput,addInputHandler,editListItem,deleteListItem,userInputList,moveListItem} = props;
    return (
        <Fragment>
        <article className={classes['todo-card']}>
            <h2>{title}</h2>
            {AddList && <AddTodoListItem 
            getUserInput={getUserInput} 
            fetchUserInput={fetchUserInput}  
            addUserInput={addInputHandler} 
            editUserInput={editListItem} 
            deleteListItem={deleteListItem} 
            userInputList={userInputList} 
            addList={AddList}
            moveListItem={moveListItem}/>}   
            {!AddList && <TodoListItems 
            addList={AddList}
            editUserInput={editListItem} 
            addUserInput={addInputHandler} 
            deleteListItem={deleteListItem} 
            userInputList={userInputList} 
            moveListItem={moveListItem} />}
        </article>
        </Fragment>
    );
}

export default TodoStatusLayout;