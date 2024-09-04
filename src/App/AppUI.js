import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import{TodoForm} from '../TodoForm';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c === 'x' ? r : (r & (0x3 | 0x8));
        return v.toString(16);
    });
  }



function AppUI() {

    const{
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter  />
            <TodoSearch />
            
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                    )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={uuidv4()}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(searchedTodos.findIndex(i => i.text === todo.text))}
                    onDelete={() => deleteTodo(searchedTodos.findIndex(i => i.text === todo.text))}  
                />
                ))}
            </TodoList>
            
            
            <CreateTodoButton setOpenModal={setOpenModal}/>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            

        </>
    );
}

export { AppUI };