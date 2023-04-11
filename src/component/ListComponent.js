function ListComponent(props) {
    const { todo, handleDoubleClick, handleTodoDelete, handleTodoCompalete } = props;
    return (
        <>
            <li
                key={todo.id}
                className={`mt-1 list-group-item d-flex bd-highlight ${todo.done ? "list-group-item-success" : ""}`}
                onDoubleClick={(e) => handleDoubleClick(e.target.key)}
            >
                <input value={todo.id} name="checkbox" className="p-5" type="checkbox" />
                <h5 className="ps-3 pt-1">{todo.text}</h5>

                <div className="ms-auto p-2">
                    <small>Created : {todo.date}</small> 
                    <button type="button" className="btn btn-primary ms-2" value={todo.id} onClick={(e) => handleTodoCompalete(e.target.value)}>
                        Completed
                    </button>
                    <button type="button" className="btn btn-danger ms-2" value={todo.id} onClick={(e) => handleTodoDelete(e.target.value)}>
                        Delete
                    </button>
                </div>
            </li>
        </>
    );
}
export default ListComponent;