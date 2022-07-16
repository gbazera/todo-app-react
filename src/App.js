import { Router, Route, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import Auth from './components/Auth'

function App() {
	return (
		<Router>
			<div className="App">
				<Link to="/">Home</Link>
				<Link to="/auth">Auth</Link>
				<Route exact path="/" element={<Sidebar />} />
				<Route exact path="/" element={<Board />} />
				<Route exact path="/auth" element={<Auth />} />
			</div>
		</Router>
	);
}

export default App;
