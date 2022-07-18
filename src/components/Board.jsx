import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Board(props) {
	const openSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.add('active');
	};

	const toggleNewTaskPanel = () => {
		const newTaskPanel = document.querySelector('.new-task-panel');
		const overlay = document.querySelector('.overlay');

		newTaskPanel.classList.toggle('active');
		overlay.classList.toggle('active');
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

	const [inputText, setInputText] = useState('');

	const handleInputText = (event) => {
		setInputText(event.target.value);
	};

	const clearInput = () => {
		document.querySelector('#taskText').value = ''
	}

	return (
		<div className="board">
			<div className="header">
				<button className="burger" onClick={openSidebar}>
					<i className="bx bx-menu"></i>
				</button>
				<div className="title">
					{props.boardList[props.activeBoard].name}
				</div>
				<a className="add-new" onClick={toggleNewTaskPanel}>
					Add new task
					<span>
						<i className="bx bx-plus"></i>
					</span>
				</a>
			</div>
			<div className="new-task-panel">
				<div className="top">
					<p>Add new task</p>
					<button className="btn red" onClick={toggleNewTaskPanel}>
						<i className="bx bx-x"></i>
					</button>
				</div>
				<form
					onSubmit={(event) => {
						props.createTask(inputText);
						event.preventDefault();
						clearInput();
						forceUpdate();
						toggleNewTaskPanel();
					}}
				>
					<input
						type="text"
						name="taskText"
						id="taskText"
						placeholder="Type task text"
						className="inp"
						onChange={handleInputText}
					/>
					<button className="btn" type="submit">
						ADD
					</button>
				</form>
			</div>
			<div className="tasks">
				{props.boardList[props.activeBoard].tasks.length == 0 ? (
					<p className="info">Task list is empty.</p>
				) : (
					props.boardList[props.activeBoard].tasks.map((task) => (
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
					))
				)}
			</div>
		</div>
	);
}

export default Board;
