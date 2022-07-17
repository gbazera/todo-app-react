import Sidebar from './Sidebar';
import Board from './Board';

function Home(){
    const boards = [
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
        }
    ]

    return(
        <div className='home'>
            <Sidebar boards={boards} />
            <Board />
        </div>
    );
}

export default Home;