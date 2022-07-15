function Sidebar(){
    return(
        <div className="sidebar">
            <div className="header">
                <a href="#" className="logo">TODO<span>APP</span></a>
                <button className="btn auth-btn">SIGN IN</button>
            </div>
            <div className="boards">
                <p className="title">Boards</p>
                <div className="items">
                    <div className="item">
                        <p>Board 1</p>
                        <button>EDIT</button>
                    </div>
                    <div className="item active">
                        <p>Board 2</p>
                        <button>EDIT</button>
                    </div>
                </div>
                <a className="add-new"><span>+</span> Add new board</a>
            </div>
        </div>
    );
}

export default Sidebar;