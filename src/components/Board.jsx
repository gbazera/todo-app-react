function Board(){
    return(
        <div className="board">
            <div className="header">
                <div className="title">Board 2</div>
                <a className="add-new">Add new task <span>+</span></a>
            </div>
            <div className="tasks">
                <div className="task active">
                    <div className="left">
                        <button className="check"><i className="bx bx-check"></i></button>
                        <p>Task 1</p>
                    </div>
                    <div className="right">
                        <button className="edit"><i className="bx bx-edit"></i></button>
                        <button className="delete"><i className="bx bx-trash"></i></button>
                    </div>
                </div>
                <div className="task">
                    <div className="left">
                        <button className="check"><i className="bx bx-check"></i></button>
                        <p>Task 2</p>
                    </div>
                    <div className="right">
                        <button className="edit"><i className="bx bx-edit"></i></button>
                        <button className="delete"><i className="bx bx-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;