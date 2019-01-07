import React from 'react';
/* Condition Imports*/
import Conditional from '../hoc/conditional'

/* Function component to handle Input Text Render*/
const TextInput = (props) => {
    return(
        <div className ={props.clName}>
            <label className='label' htmlFor={props.id}>
                {props.children}
            </label>
            <input type={props.type} id={props.id} name={props.id} onChange={props.changed}/>
            <Conditional if={props.clName!==""}>
                 <p className='erroroInfo'>{props.clError}</p>
            </Conditional>
            
        </div>
    )
}

export default TextInput;