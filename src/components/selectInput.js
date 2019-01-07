import React from 'react';
/* Condition Imports*/
import Conditional from '../hoc/conditional'

/* Function component to handle Select Dropdown List Render*/


const SelectInput = (props) => {

    function renderOptions(list,key) {
        let val = ''
        if(key!==0){
            val = list.toLowerCase();
        }
        return (
            <option key= {key} value={val}>{list}</option>
        );
    }

    return(
        <div>
            <div className ={props.clName}>
                <label className='label' htmlFor='colour'>
                    Colour
                </label>
                <select name={props.id} id={props.id} onChange={props.changed}>
                    {props.selectOptions.map(renderOptions)}
                </select>
                <Conditional if={props.clName!==""}>
                 <p className='erroroInfo'>{props.clError}</p>
                </Conditional>
            </div>
        </div>
    )
}

export default SelectInput;