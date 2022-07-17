import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { firestore } from '../firebase';

function Sidebar() {
	const closeSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.remove('active');
	};

	const toggleNewBoardPanel = () =>{
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

	const [name, setName] = useState('');

	const getBoardInputName = event =>{
		setName(event.target.value);
	}

	const handleNewBoard = async() =>{
		const collRef = collection(firestore, 'boards');
		const payload = { name, userId: user.uid };
		await addDoc(collRef, payload);
		toggleNewBoardPanel();
	}

	const [boards, setBoards] = useState([]);

	useEffect(()=>{
		onSnapshot(collection(firestore, 'boards'), (snapshot)=>{
			setBoards(snapshot.docs.map((doc) => doc.data()))
		});
	}, []);

	const userBoards = [];
	boards.map(board => {
		if(board.userId == user.uid) userBoards.push(board);
	}, []);

	// const [activeBoard, setActiveBoard] = useState('');

	// const handleSetActiveBoard = () =>{

	// }

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
				{/* <Link to='/login' style={{ textDecoration: 'none' }}> */}
				<button onClick={handleSignOut} className="btn red auth-btn">
					{user?.displayName} <i className="bx bx-log-out"></i>
				</button>
				{/* </Link> */}
			</div>
			<div className="boards">
				<p className="title">Boards</p>
					<div className="items">
						{userBoards.map(brd => (
							<div className="item" key={brd}>
								<p>{brd.name}</p>
								<button>
									<i className="bx bxs-edit"></i>
								</button>
							</div>
						))}
					</div>
				<a className="add-new" onClick={toggleNewBoardPanel}>
					<span>
						<i className="bx bx-plus"></i>
					</span>{' '}
					Add new board
				</a>
				<div className="new-board-panel">
					<div className='top'>
						<p>Add new board</p>
						<button className='btn red' onClick={toggleNewBoardPanel}><i className="bx bx-x"></i></button>
					</div>
					<input type="text" name="boardName" id="boardName" placeholder='Type board name' className='inp' onChange={getBoardInputName}/>
					<button className="btn" type='submit' onClick={handleNewBoard}>ADD</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;