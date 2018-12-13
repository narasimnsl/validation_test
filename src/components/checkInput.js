import React from 'react';
import Aux from '../hoc/aux'
/* Function component to handle Check Button Render*/
const CheckInput = (props) => {

    function renderInputs(list,key) {
        let val= list.toLowerCase();
        return (
           <Aux key= {key}>
            <input onChange={props.changed} type='checkbox' name={props.id} value={val} id={val}/>
            <label   htmlFor={val}>
                {list}
            </label>
           </Aux>
        );
    }

    return(
        <div>
            <div className ={props.clName}>
                <span className="label">
                    Animal
                </span>
                {props.checkOptions.map(renderInputs)}
            </div>
        </div>
    )
}

export default CheckInput;