/* eslint-disable no-undef */
import TodoRowsItem from "./TodoRowsItem"

function TodoTables (props){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="rows">#</th>
                    <th scope="rows">TASK</th>
                </tr>
            </thead>
            <tbody>
            {props.todos.map(
                todos => (
                    <TodoRowsItem
                        key={todos.RowsNumber}
                        RowsNumber = {todos.RowsNumber}
                        RowsItems  = {todos.RowsItems}
                        deleteTodo={props.deleteTodo}
                    />
                )
            )}
            </tbody>
        </table>
    )
}

export default TodoTables