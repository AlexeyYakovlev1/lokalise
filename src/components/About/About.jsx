import React from 'react';
import './About.sass';
import {projectApp, shorten, ensure, less} from '../../assets/images/import.js';

function About() {
	return (
		<div className="about">
			<div className="container">
				<ul className="about__list">
					<li className="about__list-item">
						<div className="about__list-item-left">
							<h3 className="about__list-item-left-title">Ensure quality</h3>
							<p className="about__list-item-left-description">
								Use built-in tools - e.g. translation memory, machine
								translation, and QA checks - to enhance the quality
								and cohesion of translations. Add product
								screenshots for context and use the in-context editors
								for instant previews.
							</p>
							<a className="about__list-item-left-start" href="/">Start now</a>
						</div>
						<div className="about__list-item-right">
							<img className="about__list-item-right-img" src={projectApp} alt="img"/>
						</div>
					</li>
					<li className="about__list-item">
						<div className="about__list-item-right">
							<img className="about__list-item-right-img" src={shorten} alt="img"/>
						</div>
						<div className="about__list-item-left">
							<h3 className="about__list-item-left-title">Shorten time to market</h3>
							<p className="about__list-item-left-description">
								Localize your product in parallel with the
								development cycle. Use the Adobe XD, Figma,
								and Sketch plugins to start working on
								translations as soon as the product design is
								ready. No more idle waiting.
							</p>
							<a className="about__list-item-left-start" href="/">Start now</a>
						</div>
					</li>
					<li className="about__list-item">
						<div className="about__list-item-left">
							<h3 className="about__list-item-left-title">Ensure quality</h3>
							<p className="about__list-item-left-description">
								Use built-in tools - e.g. translation memory, machine
								translation, and QA checks - to enhance the quality
								and cohesion of translations. Add product
								screenshots for context and use the in-context editors
								for instant previews.
							</p>
							<a className="about__list-item-left-start" href="/">Start now</a>
						</div>
						<div className="about__list-item-right">
							<img className="about__list-item-right-img" src={ensure} alt="img"/>
						</div>
					</li>
					<li className="about__list-item">
						<div className="about__list-item-right">
							<img className="about__list-item-right-img" src={less} alt="img"/>
						</div>
						<div className="about__list-item-left">
							<h3 className="about__list-item-left-title">Less work for developers</h3>
							<p className="about__list-item-left-description">
								Eliminate the hassle of localization and let developers
								get back to their main tasks. Save hours with the
								powerful API, CLI, mobile SDKs, and integrations with
								GitHub, Bitbucket, JIRA, and more.
							</p>
							<a className="about__list-item-left-start" href="/">Start now</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default About;