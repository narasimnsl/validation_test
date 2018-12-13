import React from 'react';
/* Function component to handle Input Text Render*/
const TextInput = (props) => {
    return(
        <div className ={props.clName}>
            <label className='label' htmlFor={props.id}>
                {props.children}
            </label>
            <input type={props.type} id={props.id} name={props.id} onChange={props.changed}/>
        </div>
    )
}

export default TextInput;