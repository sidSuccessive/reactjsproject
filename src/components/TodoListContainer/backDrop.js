
import classes from './TodoListContainer.module.css';
const BackDrop = (props) => {
        const closeModal = () => {
            props.setModelOpend(false);
        }
        return (
    <div className={classes['back-drop-overlay']} onClick={closeModal}></div>
    )
 }

 export default BackDrop;