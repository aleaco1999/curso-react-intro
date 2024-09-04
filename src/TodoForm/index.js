import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    function onCancel(){
        setOpenModal(false);
    }

    function onChange(event){
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar cebolla para el almuerzo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type=''
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export{ TodoForm };