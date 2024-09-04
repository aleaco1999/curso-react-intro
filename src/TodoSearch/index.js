import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);
    
    return(
        <input 
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event)=>{
            console.log('Escribiste en el TodoSearch');
            console.log(event.target.value);
            setSearchValue(event.target.value);
        }} />
    );
}

export { TodoSearch };