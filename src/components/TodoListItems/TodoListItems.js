
import TodoListItem from "../TodoListItem/TodoListItem";
import classes from "./TodoListItems.module.css"
const TodoListItems = props => {
    const {addList,addUserInput,editListItem,deleteListItem,moveListItem} = props;
    console.log("props.userInputList", props.userInputList)
    return (
        <ul className={classes['todo-list-ul']}>
            {
                props.userInputList.map((item,index)=>{
                    console.log("ITEM________________________", item);
                    return <TodoListItem  
                    addList={addList} 
                    item={item} 
                    key={index} 
                    index={index} 
                    addUserInput={addUserInput}
                    onClickEdit={editListItem} 
                    deleteList={deleteListItem} 
                    moveListItem={moveListItem} />
                })
            }

        </ul>
    );
}

export default TodoListItems;