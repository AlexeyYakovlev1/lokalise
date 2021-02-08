import {
	specialized, virgin, tidal, revolut, yelp, daimler,
	webApps, mobileApps, games, documents, marketingEmails,
	iot, managers, developers, translators
} from './assets/images/import.js';

const data = {
	header: {
		menuList: [
			{text: 'Product', link: '/product'},
			{text: 'Features', link: '/features'},
			{text: 'Pricing', link: '/pricing'},
			{text: 'Case studies', link: '/case-studies'},
			{text: 'Resources', link: 'resources'}
		]
	},
	companies: {
		companiesList: [
			{img: specialized, name: 'specialized'},
			{img: virgin, name: 'virgin'},
			{img: tidal, name: 'tidal'},
			{img: revolut, name: 'revolut'},
			{img: yelp, name: 'yelp'},
			{img: daimler, name: 'daimler'}
		]
	},
	lokalize: {
		lokalizeList: [
			{
				img: webApps,
				title: 'Web apps',
				description: 'Any kind of web apps - backend, frontend, single page, blogs - you name it.'
			},
			{
				img: mobileApps,
				title: 'Mobile apps',
				description: 'Upload any mobile platform language files. Embed Lokalise iOS SDK or Lokalise Android SDK if you prefer. '
			},
			{
				img: games,
				title: 'Games',
				description: 'Our cloud software is trusted by many leading game developers around the world.'
			},
			{
				img: documents,
				title: 'Documents',
				description: 'Upload your DOCX and static HTML files.'
			},
			{
				img: marketingEmails,
				title: 'Marketing e-mails',
				description: 'Integrate with Salesforce Marketing Cloud (coming soon) or translate static e-mails.'
			},
			{
				img: iot,
				title: 'IoT',
				description: 'We support most popular localization file formats.'
			}
		]
	},
	productivity: {
		productivityList: [
			{
				img: managers,
				title: 'Managers',
				description: 'Update existing and launch new features and products while simultaneously localizing them in multiple languages. Streamline your teams workflow, maximize productivity, and speed up expansion to other markets.',
				link: '/learn-1'
			},
			{
				img: developers,
				title: 'Developers',
				description: 'Set up an integration with your code repository or your own custom SDK via Lokalises powerful API. Do that once, and every time you make changes in the code, theyll be automatically imported to Lokalise for translation.',
				link: '/learn-2'
			},
			{
				img: translators,
				title: 'Translators',
				description: 'Eliminate double-work and neverending revisions with visual context (screenshots) and live previews. Improve the quality and speed of your translations with built-in CAT tools, like autocomplete, inline machine translation, and translation memory.',
				link: '/learn-3'
			},
		]
	}
}

export default data;