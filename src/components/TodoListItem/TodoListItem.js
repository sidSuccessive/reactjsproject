
import { useState } from "react";
import Button from "../Button/Button";
import classes from  "./TodoListItem.module.css"
const TodoListItem = props => {
    const {index,item,addList,addUserInput,deleteList,onClickEdit,moveListItem} = props;
   const [updatedItemText,setUpdateItemText] = useState(item.text);
    const btnText = (item.isEdit ?  "Update" : "Edit");
    const updateItemHandler = event => {
        setUpdateItemText(event.target.value);
        
    }
    console.log("item", item);
    console.log("_UPDATED_ITEM_TEXT", updatedItemText);
    return(<li className={classes['list-card-li']}>    
    <p>
        {item.isEdit ? <input 
        defaultValue={updatedItemText} 
        onChange={updateItemHandler} /> 
        : item.text}
    </p>
    <div className={classes['button-div']}>
        {addList && 
        <Button 
        type="button" 
        title="Delete" 
        onClick={()=>deleteList(index)}>
        </Button>
        }
        {addList && 
        <Button 
        type="button" 
        title={btnText} 
        onClick={()=>onClickEdit(index)}>
        </Button>
        }
        <Button 
        type="button"
        title="Move" 
        onClick={()=>moveListItem(index)}>
        </Button>
    </div>
</li>
    )
}

export default TodoListItem;