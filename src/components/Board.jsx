import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Board(props) {
	const openSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.add('active');
	};

	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);

	// const navigate = useNavigate();
	// const { user } = UserAuth();

	// useEffect(() => {
	// 	if (user == null) {
	// 		navigate('/signin');
	// 	}
	// }, [user]);

	return (
		<div className="board">
			<div className="header">
				<button className="burger" onClick={openSidebar}>
					<i className="bx bx-menu"></i>
				</button>
				<div className="title">
					{props.boardList[props.activeBoard].name}
				</div>
				<a className="add-new">
					Add new task
					<span>
						<i className="bx bx-plus"></i>
					</span>
				</a>
			</div>
			<div className="tasks">
				{props.boardList[props.activeBoard].tasks.map((task) => (
					<div
						className={task.completed ? 'task active' : 'task'}
						key={task.id}
					>
						<div className="left">
							<button
								className="check"
								onClick={() => {
									props.toggleTask(task.id);
									forceUpdate();
								}}
							>
								<i className="bx bx-check"></i>
							</button>
							<p>{task.text}</p>
						</div>
						<div className="right">
							<button className="edit">
								<i className="bx bx-edit"></i>
							</button>
							<button
								className="delete"
								onClick={() => {
									props.deleteTask(task.id);
									forceUpdate();
								}}
							>
								<i className="bx bx-trash"></i>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Board;
