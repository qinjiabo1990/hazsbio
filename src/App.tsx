import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, Contact, About } from './pages'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={About} />
					<Route exact path="/" component={Home} />
					<Route render={() => <h1>404 Page Not Found</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
