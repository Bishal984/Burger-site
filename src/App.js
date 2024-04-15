import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/index.js';
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				{/* <Route index element={<h3>Home</h3>} /> */}
			</Route>
		</Routes>
	);
}

export default App;
