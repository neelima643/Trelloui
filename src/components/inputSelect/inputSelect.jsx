import './inputSelect.css'




const inputSelect = ( {
    options,
    label,
    selectclass,
    divname,
    optionclass
}

) => {
    return (
       
            <div className={divname}>
           
            <select className={selectclass} name={ label } onClick= { (event) => onchange(event.target.value)}>
                {options.map((item) => (
                    
              <option className={optionclass} value={item.key}>{item.val}</option>
            ))}


                </select>

           
            
        </div>
      
    )
}

export default inputSelect;