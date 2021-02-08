import React from 'react';
import './Tools.sass';
import {tools} from '../../assets/images/import.js';

function Tools() {
	return (
		<div className="tools">
			<div className="container">
				<h2 className="tools-title">
					Integrate Lokalise with
					your work tools
				</h2>
				<p className="tools-subtitle">
					Automate processes, eliminate routine tasks,
					and track progress with ease.
				</p>
				<img className="tools-img" src={tools} alt="bird" />

				<button className="tools-btn orange-btn">
					<a href="/">
						See all integrations
					</a>
				</button>
			</div>
		</div>
	)
}

export default Tools;