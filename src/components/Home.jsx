import Sidebar from './Sidebar';
import Board from './Board';
import { useEffect, useState } from 'react';

function Home(){
    const [boardList, setBoardList] = useState([
        {
            id: 0,
            name: 'My board 1',
            tasks: [
                {
                    id: 0,
                    text: 'This is my first task',
                    completed: false
                }
            ]
        },
        {
            id: 1,
            name: 'Another board',
            tasks: [
                {
                    id: 0,
                    text: 'Task 1',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Task number 2',
                    completed: true
                }
            ]
        }
    ])

    const updateList = (newBoard) =>{
        const newBoardList = boardList;
        if(newBoard){
            newBoardList.push(newBoard);
            setBoardList(newBoardList);
        }else{
            setBoardList(boardList);
        }
    }

    const [activeBoard, setActiveBoard] = useState(0);

    const selectBoard = (id) =>{
		setActiveBoard(id)
	}

    const createBoard = (boardName) =>{
        if(boardName == '') return;

        const newBoard = {
            id: boardList.length,
            name: boardName,
            tasks: []
        }

        updateList(newBoard)
        selectBoard(newBoard.id)
    }

    const toggleTask = (taskId) =>{
        boardList[activeBoard].tasks[taskId].completed = !boardList[activeBoard].tasks[taskId].completed
    }

    const deleteTask = (taskId) =>{
        delete boardList[activeBoard].tasks[taskId]
    }

    return(
        <div className='home'>
            <Sidebar boardList={boardList} activeBoard={activeBoard} selectBoard={selectBoard} createBoard={createBoard}/>
            <Board boardList={boardList} activeBoard={activeBoard} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default Home;