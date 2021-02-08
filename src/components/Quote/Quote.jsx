import React from 'react';
import './Quote.sass';
import {revolut, person} from '../../assets/images/import.js';

function Quote() {
	return (
		<div className="quote">
			<div className="container">
				<div className="quote__left">
					<p className="quote__left-text">
						"Lokalise has turned a task we were dreading into an absolute
						pleasure. Great platform, intuitive UX, powerful API. The
						automatic text recognition for screenshots has been a
						lifesaver, and over-the-air updates are the icing on the cake."
					</p>

					<small className="quote__left-person">
						Edward Cooper, Chief Mobile Officer
					</small>

					<img className="quote__left-company-img" src={revolut} alt="revolut" />
				</div>

				<div className="quote__right">
					<img className="quote__right-img" src={person} alt="person" />
				</div>
			</div>
		</div>
	)
}

export default Quote;