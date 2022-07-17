import Sidebar from './Sidebar';
import Board from './Board';

function Home(){
    return(
        <div className='home'>
            <Sidebar />
            <Board />
        </div>
    );
}

export default Home;