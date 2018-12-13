import React from 'react';
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
            </div>
        </div>
    )
}

export default SelectInput;