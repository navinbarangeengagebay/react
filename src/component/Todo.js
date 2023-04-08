import { useEffect, useState } from 'react';
import ListComponent from './ListComponent';
import EmaptyComponent from './EmptyComponent';
function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState(0);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            return;
        }
        let name = inputValue.trim()[0].toUpperCase() + inputValue.slice(1);
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " At "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        setTodos([{ id: Date.now(), date: datetime, text: name, done: false }, ...todos]);
        setInputValue('');
    };

    const handleTodoCompalete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done };
                } else {
                    return todo;
                }
            })
        );
    };

    const handleDoubleClick = (id) => {
        alert("Double Clicked for ID :", id)
    }

    const handleTodoDelete = (id) => {
        console.log("Task deleted, ID : ", id)
        setTodos(todos.filter((todo) => todo.id != id));
    };
    const bulkDelete = () => {
        let checkboxs = document.getElementsByName("checkbox");
        let newTodos = todos,filterTodos;
        for (let i = 0; i < checkboxs.length; i++) {
            if (checkboxs[i].checked) {
                filterTodos = newTodos.filter((todo) => todo.id != checkboxs[i].value);
                newTodos = filterTodos;
            }
        }
        setTodos(filterTodos)
    }
    function selectAllCheckBox() {
        let checkboxs = document.getElementsByName("checkbox");
        let count = 0;
        for (let i = 0; i < checkboxs.length; i++) {
            if (!checkboxs[i].checked) {
                checkboxs[i].checked = true;
            }
            else
                count++;
        }
        if (count == checkboxs.length) {
            for (let i = 0; i < checkboxs.length; i++) {
                checkboxs[i].checked = false;
            }
        }
    }
    return (
        <div className="main-container">
            <h1 className="text-center my-4 text-warning">EngageBay TODO</h1>
            <form className="mb-4" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <div className="form-floating mb-1">
                        <input className="form-control" type="text" value={inputValue} onChange={handleInputChange} placeholder="Email Address" />
                        <label>Enter New Task</label>
                    </div>
                    <div className="mb-1">
                        <button className="btn btn-outline-primary w-100 ms-2 p-3" type="submit">Add</button>
                    </div>
                </div>
            </form>

            <ul className="list-group">
                <li className=' bg-dark p-0'>
                    <div className='d-flex'>
                        {
                            todos.length != 0 ? <>
                                <div className='p-2'>
                                    <a role="button" id="select_all_checkbox" onClick={() => selectAllCheckBox()} className='btn btn-outline-secondary ms-2 link-light text-decoration-none'>Select All</a>
                                    <a role="button" id="select_all_checkbox" onClick={() => bulkDelete()} className='btn btn-outline-danger  ms-2 link-light text-decoration-none'>Bulk Delete</a>
                                </div>
                                <p className='ms-auto p-2 text-warning'>Available Task - {todos.length}</p>
                            </>
                                : ""
                        }
                    </div>
                </li>
                {todos.length !== 0 ?
                    todos.map((todo) => (
                        <ListComponent todo={todo} handleTodoDelete={handleTodoDelete} handleDoubleClick={handleDoubleClick} handleTodoCompalete={handleTodoCompalete} />

                    ))
                    : <EmaptyComponent />

                }
            </ul>
        </div>
    );
}

export default Todo;
