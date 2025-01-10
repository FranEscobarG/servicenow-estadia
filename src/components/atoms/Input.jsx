function Input({type, name, label}) {
    return ( 
        <input type={type} name={name} id={name} placeholder={label} required/>
     );
}

export default Input;