import { onSnapshot, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { firestore } from '../firebase';

function Sidebar() {
	const closeSidebar = () => {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.remove('active');
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

    const [boards, setBoards] = useState([])

    const boardList = boards.map(usr => {
        if(usr.id == user.uid){
            return usr.boardList
        }
    });

	useEffect(
		() =>
			onSnapshot(collection(firestore, 'boards'), (snapshot) => {
				setBoards(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
			}),
		[]
	);

	return (
		<div className="sidebar">
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
                    {boardList.map(bs => (
                        <div className="items" key={boardList.id}>
                            {bs.map(b => (
                                <div className="item" key={b.id}>
                                    <p>{ b }</p>
                                    <button>
                                        <i className="bx bx-edit"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
				<a className="add-new">
					<span>
						<i className="bx bx-plus"></i>
					</span>{' '}
					Add new board
				</a>
			</div>
		</div>
	);
}

export default Sidebar;
