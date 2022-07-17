import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Home from './components/Home'
import Signin from './components/Signin'

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/signin" element={<Signin />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
