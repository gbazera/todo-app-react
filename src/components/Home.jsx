import Sidebar from './Sidebar';
import Board from './Board';
import { useEffect, useState } from 'react';

function Home(){
    const [boardList, setBoardList] = useState([
        {
            id: 0,
            name: 'My board',
            tasks: [
                {
                    id: 0,
                    text: 'My task',
                    completed: false
                }
            ]
        }
    ])

    const addBoard = (newBoard) =>{
        const newBoardList = boardList
        newBoardList.push(newBoard)
        updateList(newBoardList)
    }

    const updateList = (newBoardList) =>{
        setBoardList(newBoardList)
    }

    const [activeBoard, setActiveBoard] = useState(0);

    const selectBoard = (id) =>{
		setActiveBoard(id)
        saveList()
	}

    const createBoard = (boardName) =>{
        if(boardName == '') return;

        const newBoard = {
            id: boardList.length,
            name: boardName,
            tasks: []
        }

        addBoard(newBoard)
        selectBoard(newBoard.id)
    }

    const toggleTask = (taskId) =>{
        boardList[activeBoard].tasks[taskId].completed = !boardList[activeBoard].tasks[taskId].completed
        saveList()
    }

    const deleteTask = (taskId) =>{
        delete boardList[activeBoard].tasks[taskId]
        saveList()
    }

    const createTask = (taskText) =>{
        if(taskText == '') return;
        
        const newTask = {
            id: boardList[activeBoard].tasks.length,
            text: taskText,
            completed: false
        }

        boardList[activeBoard].tasks.push(newTask)
        saveList()
    }

    const saveList = () =>{
        localStorage.setItem('boardList', JSON.stringify(boardList));
    }

    const loadList = () =>{
        const list = localStorage.getItem('boardList')
        if(list) updateList(JSON.parse(list))
    }

    useEffect(() => {
        loadList()
    }, [])

    return(
        <div className='home'>
            <Sidebar boardList={boardList} activeBoard={activeBoard} selectBoard={selectBoard} createBoard={createBoard}/>
            <Board boardList={boardList} activeBoard={activeBoard} toggleTask={toggleTask} deleteTask={deleteTask} createTask={createTask} />
        </div>
    );
}

export default Home;