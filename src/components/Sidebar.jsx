import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Sidebar(props) {
	const closeSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.remove('active');
	};

	const toggleNewBoardPanel = () => {
		const newBoardPanel = document.querySelector('.new-board-panel');
		const overlay = document.querySelector('.overlay');

		newBoardPanel.classList.toggle('active');
		overlay.classList.toggle('active');
	};

	const navigate = useNavigate();
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user == null) {
			navigate('/signin');
		}
	}, [user]);

	return (
		<div className="sidebar">
			<div className="overlay"></div>
			<div className="header">
				<button className="close" onClick={closeSidebar}>
					<i className="bx bx-x"></i>
				</button>
				<a href="#" className="logo">
					TODO<span>APP</span>
				</a>
				<button onClick={handleSignOut} className="btn red auth-btn">
					{user?.displayName} <i className="bx bx-log-out"></i>
				</button>
			</div>
			<div className="boards">
				<p className="title">Boards</p>
				<div className="items">
					{props.boards.map(board => (
						<div className="item" key={board.id}>
							<p>{ board.name }</p>
							<button>
								<i className="bx bxs-edit"></i>
							</button>
						</div>
					))}
				</div>
				<a className="add-new" onClick={toggleNewBoardPanel}>
					<span>
						<i className="bx bx-plus"></i>
					</span>
					Add new board
				</a>
				<div className="new-board-panel">
					<div className="top">
						<p>Add new board</p>
						<button
							className="btn red"
							onClick={toggleNewBoardPanel}
						>
							<i className="bx bx-x"></i>
						</button>
					</div>
					<input
						type="text"
						name="boardName"
						id="boardName"
						placeholder="Type board name"
						className="inp"
					/>
					<button className="btn" type="submit">
						ADD
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
