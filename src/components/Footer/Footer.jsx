import React from 'react';
import './Footer.sass';
import {bike, specialized, logoFooter} from '../../assets/images/import.js';

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__top-left">
						<h3 className="footer__top-left-title">
							Case Studies
						</h3>

						<img className="footer__top-left-img" src={bike} alt="bikes" />
						<img className="footer__top-left-specialized-img" src={specialized} alt="specialized" />

						<p className="footer__top-left-description">
							Riding towards global success
							with a 100% teammate
							enthusiasm
						</p>
						<a className="footer__top-left-read-link" href="/read">Read more</a>
					</div>

					<div className="footer__top-right">
						<nav className="footer__top-right-menu">
							<ul className="footer__top-right-menu-list">
								<li className="footer__top-right-menu-list-item">
									Product
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">For developers</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">For managers</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">For translators</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">For designers</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Integrations</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Security</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Pricing</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Automations</a>
								</li>
							</ul>

							<ul className="footer__top-right-menu-list">
								<li className="footer__top-right-menu-list-item">
									Support
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Contact</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Documentation</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Status</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Product Updates</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">CLI Tool</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">API Reference</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">IOS and Android SDK</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Supported File Formats</a>
								</li>
							</ul>

							<ul className="footer__top-right-menu-list">
								<li className="footer__top-right-menu-list-item">
									Company
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">About</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Blog</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Carees | We're Hiring</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Case Studies</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Media Kit</a>
								</li>
							</ul>

							<ul className="footer__top-right-menu-list">
								<li className="footer__top-right-menu-list-item">
									Legal
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Terms of Service</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Privacy Policy</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Cookie Policy</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Privacy Shield</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">DPA</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Lst of Sub-processors</a>
								</li>
								<li className="footer__top-right-menu-list-item">
									<a href="/">Candidates Privacy Notice</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="footer__down">
					<div className="footer__down-left">
						<img className="footer__down-left-logo" src={logoFooter} alt="logo" />
						<p className="footer__down-left-description">
							Localization workflow for your web and mobile
							   apps, games and digital content.
						</p>
					</div>
					<div className="footer__down-right">
						<span className="footer__down-right-info">2001-2020</span>
						<span className="footer__down-right-info">All rights reserved.</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;