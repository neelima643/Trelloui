const Button = ({
    buttonclass,
    label,
    icon,
    onclick
}) => {
    
    return (
        <button className={buttonclass} onClick = {onclick}>
            
            {icon}
            {label}
            </button>
    )
    
}

export default Button;