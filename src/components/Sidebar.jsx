function Sidebar(){
    const closeSidebar = () =>{
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('active')
    }
    
    return(
        <div className="sidebar">
            <div className="header">
                <button className="close" onClick={closeSidebar}><i className="bx bx-x"></i></button>
                <a href="#" className="logo">TODO<span>APP</span></a>
                <button className="btn red auth-btn">Person's name <i className="bx bx-log-out"></i></button>
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
                <a className="add-new"><span><i className="bx bx-plus"></i></span> Add new board</a>
            </div>
        </div>
    );
}

export default Sidebar;