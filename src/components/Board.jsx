import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Board(){
    const openSidebar = () =>{
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('active')
    }

    const navigate = useNavigate();
    const { user } = UserAuth();

    useEffect(() => {
		if (user == null) {
			navigate('/signin');
		}
	}, [user]);
    
    return(
        <div className="board">
            <div className="header">
                <button className="burger" onClick={openSidebar}><i className="bx bx-menu"></i></button>
                <div className="title">Board 2</div>
                <a className="add-new">Add new task <span><i className="bx bx-plus"></i></span></a>
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