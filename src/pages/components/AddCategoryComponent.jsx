import { useState } from "react";
import PropTypes from 'prop-types';


export function AddCategoryComponent({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');

    function onInputChanged({ target: { value } }) {
        setInputValue( value );
    }

    function onSubmit(e) { 
        e.preventDefault();
        const value = inputValue.trim();

        if ( !value.length ) return;
        
        onNewCategory(value);
        setInputValue('');
    }

    return(
        <>
            <form onSubmit={ onSubmit } role="form">
                <input type="text" placeholder="Buscar GIF's" value={ inputValue } onChange={ onInputChanged } />
            </form>
        </>
    );
}


AddCategoryComponent.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}