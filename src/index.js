/* jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/website/Home';
import Plan from './pages/website/Plan';
import Bim from './pages/website/Bim';
import Operation from './pages/website/Operation';
import Constructer from './pages/website/Constructer';
import Designer from './pages/website/Designer';
import About from './pages/website/About';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
	return( 
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/h/operation" component={Operation} />
			<Route exact path="/h/bim" component={Bim} />
			<Route exact path="/h/plan" component={Plan} />
			<Route exact path="/h/about" component={About} />
			<Route exact path="/h/constructer" component={Constructer} />
			<Route exact path="/h/designer" component={Designer} />
		</BrowserRouter >
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
