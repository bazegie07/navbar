import React, { useContext } from 'react';
import NameContext from './NameContext';

function Form (){
    const context = useContext(NameContext);

    const handleSubmit = e => {
    e.preventDefault();
    context.setName(context.name);
    console.log(context.name)
    };



    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Your Name: </label>
            <input
            type = "text"
            value = { context.name }
            onChange = {e => context.setName(e.target.value)}
            placeholder = "Enter Here"
            />
        </form>
    </div>
    );
}

export default Form;