

import TodoStatusLayout from "../TodoStatusLayout/TodoStatusLayout";
import React, {useState,Fragment} from 'react';
import { createPortal } from 'react-dom';
import BackDrop from "./backDrop";
import Modal from '../Modal/Modal';
const TodoListContainer = () => {

    const backDropOverlay = document.getElementById('back-drop'); 
    const modalOverlay = document.getElementById("modal-overlay");

    const [isModelOpend,setModelOpend] = useState(false);

    const [userInputList, setUserInputList] = useState([]);
    const [getUserInput, setUserInputValue] = useState('');

    const [inProgressList, setInProgressList] = useState([]);

    const [doneTodoList,setDoneTodoList] = useState([]);

    const [movedItemIndex,setMoveItemIndex] = useState('');

    const addInputHandler = () => {
        setUserInputList(oldArray => 
            [...oldArray , {text: getUserInput, isEdit: false}]
        )
        setUserInputValue('');
    }

    const editListItem = index => {
       const editedList = userInputList.map((item,i)=>{
        if(index === i) {
            return (
                {...item, isEdit: !item.isEdit}
            )
        }
        return item;
       })
       //console.log(editedList);
       setUserInputList(editedList);
    }

    const deleteListItem = index => {
        //console.log(index);
        //console.log("initial", userInputList);
        userInputList[index] = {};
        //console.log("after", userInputList);
        const filteredList = userInputList.filter((item,i)=>{
            return index !== i;
        })

        console.log("filteredLISt", filteredList);
        //console.log("filtered"+ JSON.stringify(filteredList));
        //console.log("beforeFilter"+ JSON.stringify(userInputList));
        setUserInputList(filteredList);

        console.log("userInput", userInputList);
        //console.log("afterFilter"+ JSON.stringify(userInputList));
     }

     const moveListItem = index => {
        setMoveItemIndex(index);
        setModelOpend(true);
     }

     const getStatusValueHandler = (selectedValue,index) => {
        //console.log(selectedValue);
        const filteredListItem = userInputList.filter((item,i)=>{
            return index === i;
        });
        
        if(selectedValue ==="Inprogress") {
            setInProgressList(filteredListItem);
        }
        if(selectedValue ==="Done") {
            setDoneTodoList(filteredListItem);
        }
        deleteListItem(index);

     }
     const fetchUserInput = (userTodoListText) => {
        setUserInputValue(userTodoListText)
     }
  

    return(
        <Fragment>
        {isModelOpend && createPortal(<BackDrop setModelOpend={setModelOpend}/>,backDropOverlay)}
        {isModelOpend && createPortal(<Modal setModelOpend={setModelOpend}
        movedItemIndex={movedItemIndex} 
        getStatusValue = {getStatusValueHandler}/>,modalOverlay)}
            <TodoStatusLayout 
             title="Todo" 
             getUserInput={getUserInput} //to update list text
             fetchUserInput={fetchUserInput} //for todo section
             AddList={true} //to render button and list section
             addInputHandler={addInputHandler} //update to list
             editListItem={editListItem} //to edit list item
             deleteListItem={deleteListItem} //to delete list 
             userInputList={userInputList} 
             moveListItem={moveListItem} 
             isModelOpend={isModelOpend} 
             setUserInputValue = {setUserInputValue}
             movedItemIndex={movedItemIndex} 
             getStatusValueHandler={getStatusValueHandler}
             />
            <TodoStatusLayout 
            title="Inprogress" 
            AddList={false} 
            moveListItem={moveListItem} 
            addInputHandler={addInputHandler} //update to list
            isModelOpend={isModelOpend} 
            movedItemIndex={movedItemIndex} 
            userInputList={inProgressList} 
            getStatusValueHandler={getStatusValueHandler} 
            />
            <TodoStatusLayout 
            title="Done" 
            AddList={false} 
            moveListItem={moveListItem} 
            addInputHandler={addInputHandler} //update to list
            isModelOpend={isModelOpend} 
            movedItemIndex={movedItemIndex} 
            userInputList={doneTodoList} 
            getStatusValueHandler={getStatusValueHandler}
            />
            
        </Fragment>
    );
}

export default TodoListContainer;