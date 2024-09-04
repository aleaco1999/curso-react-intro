import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter(){
    
    const {
        completedTodos, 
        totalTodos
    } = React.useContext(TodoContext);
    
    return(
        <h1>
            Has completado <span className='span-text'>{completedTodos}</span> de <span className='span-text'>{totalTodos}</span> TODOS
        </h1>
    );

}

export { TodoCounter }