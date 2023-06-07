
import { useState } from 'react';
import classes from './Modal.module.css';
const Modal = (props) => { 
    const [statusDropdownValue, setStatusDropdownValue] = useState('');
    const {movedItemIndex,getStatusValue,setModelOpend}  = props;
    const getSelectedStatusValue = (event) => {
        console.log(event.target.value);
        setStatusDropdownValue(event.target.value);
    }
    const getStatusValueHandler = (event) => {
        event.preventDefault();
        setModelOpend(false);
        getStatusValue(statusDropdownValue,movedItemIndex);
    }
    return (
            <div className={classes['modal-content']}>  
            <h3>Choose Todo Status</h3>
            <form onSubmit={getStatusValueHandler}>
                <select id="statusDropdown" onChange={getSelectedStatusValue}>
                    <option value="">Choose Todo Status</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit">Ok</button>
            </form>
            </div>
    )
}

export default Modal;