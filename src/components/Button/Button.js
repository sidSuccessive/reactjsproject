

const Button = props => {
    return(
        <button type={props.type} onClick={props.onClick} value={props.value} flag={props.flag}>{props.title}</button>
    )
}
export default Button;