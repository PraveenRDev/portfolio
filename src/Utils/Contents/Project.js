import SociallyDev from '../../Assets/Images/SociallyDev.png'
import ChooperForce from '../../Assets/Images/ChooperForce.png'
import ClickAndPick from '../../Assets/Images/ClickAndPick.png'
import WMW from '../../Assets/Images/WMW.png'
import Mindfulness from '../../Assets/Images/Mindfulness.png'

export const TITLE = {
	english: 'Projects',
	french: 'Projets',
}
export const SUB_TITLE = {
	english: 'Technologies',
	french: 'Les technologies',
}

export const FEATURED_PROJECT = {
	TITLE: {
		english: 'Leafwire',
		french: 'Leafwire',
	},
	DESCRIPTION: {
		english:
			'Leafwire is recognized as the largest online cannabis business connectivity platform by FORBES. With over 50,000 users, It allows users to make connections, read and post information/news in real-time, find investors or companies, job boards, the marketplace, events, training and learning, and many other features. I was part of all the features of the application from its initial release in 2018 to 2020.',
		french:
			"Leafwire est reconnue comme la plus grande plateforme de connectivité commerciale du cannabis en ligne par FORBES. Avec plus de 50000 utilisateurs, il permet aux utilisateurs de se connecter, de lire et de publier des informations / actualités en temps réel, de trouver des investisseurs ou des entreprises, des sites d'emploi, le marché, des événements, des formations et des apprentissages, et de nombreuses autres fonctionnalités. J'ai fait partie de toutes les fonctionnalités de l'application de sa sortie initiale en 2018 à 2020.",
	},
	TECHNOLOGIES: [
		'Micro-services with Node',
		'Express',
		'Micro-frontends with React',
		'Redux',
		'Analytics',
		'Redis',
		'Bluesnap',
		'AWS(S3, Cloudwatch, EC2, EBS)',
		'Docker',
		'Replica set Mongo DB',
		'TypeScript',
		'SendGrid',
		'SocketIO',
		'Mocha & Chai',
		'YARN',
		'PostMan',
		'BitBucket',
		'Jira',
	],
	LINK: 'https://www.leafwire.com',
}

export const PROJECTS = [
	{
		TITLE: 'Socially Dev',
		IMAGE: SociallyDev,
		DESCRIPTION: {
			english:
				"This is my current project, A Social Networking platform for developers to share their insights through posts and real-time messages. This project includes industry-standard best practices and the latest trends of each technology that's used within it.",
			french:
				"Ceci est mon projet actuel, une plateforme de réseautage social permettant aux développeurs de partager leurs idées par le biais de publications et de messages en temps réel. Ce projet comprend les meilleures pratiques standard de l'industrie et les dernières tendances de chaque technologie qui est utilisée à l'intérieur.",
		},
		TECHNOLOGIES: [
			'TypeScript',
			'React With Hooks',
			'Formik wih Yup',
			'Materialize UI',
			'Node With Express',
			'Redux Toolkit',
			'Mongo DB',
			'SocketIO',
			'Mocha & Chai',
			'JWT',
			'NPM',
			'GIT',
		],
		LINK: {
			NAME: 'Frontend Repo',
			URL: 'https://github.com/PraveenRDev/SociallyDev-WEB',
		},
		LINK_2: {
			NAME: 'Backend Repo',
			URL: 'https://github.com/PraveenRDev/SociallyDev-API',
		},
	},
	{
		TITLE: 'Chopper Force Five (US Military Air Force)',
		IMAGE: ChooperForce,
		DESCRIPTION: {
			english:
				'A multi-functional application that can track and manage data with the ability to generate pre-formatted reports at the click of a button. This application will enable mid-level management to generate snap-shot reports with critical information depicting the current strengths and weaknesses of the organization',
			french:
				"Une application multifonctionnelle qui peut suivre et gérer les données avec la possibilité de générer des rapports pré-formatés en un clic. Cette application permettra à la direction de niveau intermédiaire de générer instantanément des rapports instantanés composés d'informations critiques décrivant les forces et faiblesses actuelles de l'organisation.",
		},
		TECHNOLOGIES: ['PHP', 'HTML', 'SQL', 'Bootstrap', 'JS'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/2021-Winter-HTTP-5202-A/ChopperForceFive',
		},
		LINK_2: {
			NAME: 'Visit Website',
			URL: 'https://chopperforcefive.herokuapp.com/',
		},
	},
	{
		TITLE: 'Click & Pick',
		IMAGE: ClickAndPick,
		DESCRIPTION: {
			english: 'eCommerce platform with MERN stack. Shopping cart, Payments, Reviews, and a full-fledged admin panel.',
			french: "Plateforme de commerce électronique avec pile MERN. Panier, paiements, avis et un panneau d'administration à part entière.",
		},
		TECHNOLOGIES: ['React With Hooks', 'Redux', 'Node With Express', 'Mongo', 'PayPal', 'DB Seed Script', 'NPM', 'Git'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/PraveenRDev/ClickAndPick',
		},
		LINK_2: {
			NAME: 'Visit Website',
			URL: 'https://clickandpick.herokuapp.com/',
		},
	},
	{
		TITLE: "WMW (What's My Wine)",
		IMAGE: WMW,
		DESCRIPTION: {
			english:
				'Have you (user) ever got confused about selecting the right wine for your next meal? No More confusion. WMW allows users to find the right wine that pairs with their meal.',
			french:
				"Avez-vous (l'utilisateur) déjà été confus quant à la sélection du bon vin pour votre prochain repas? Plus de confusion. WMW permet aux utilisateurs de trouver le bon vin qui se marie avec leur repas.",
		},
		TECHNOLOGIES: ['React', 'Stripe', '3rd Party APIs', 'Styled Components', 'S3', 'NPM', 'Git'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/PraveenRDev/find_my_wine',
		},
		LINK_2: {
			NAME: 'Visit Website',
			URL: 'http://what-my-wine.s3-website.ca-central-1.amazonaws.com/',
		},
	},
	{
		TITLE: 'Mindfulness',
		IMAGE: Mindfulness,
		DESCRIPTION: {
			english:
				'The app helps for a productive break, helping users to take breaths in certain frequencies to enhance their mood. Showing relevant statistics after the completion of sessions',
			french:
				"L'application aide pour une pause productive, aidant les utilisateurs à respirer à certaines fréquences pour améliorer leur humeur. Affichage des statistiques pertinentes après la fin des sessions",
		},
		TECHNOLOGIES: ['HTML', 'CSS', 'JS'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/PraveenRDev/find_my_wine',
		},
		LINK_2: {
			NAME: 'Visit Website',
			URL: 'http://dev.thinkoutside.breathebubble.s3-website.us-east-2.amazonaws.com/',
		},
	},
]
