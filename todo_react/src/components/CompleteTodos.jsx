export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div className="incomplete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onClickBack(index)}>完了</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}