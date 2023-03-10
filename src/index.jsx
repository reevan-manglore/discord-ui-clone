import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
