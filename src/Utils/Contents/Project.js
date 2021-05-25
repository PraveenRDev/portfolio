import SociallyDev from '../../Assets/Images/SociallyDev.png'
import ChooperForce from '../../Assets/Images/ChooperForce.png'
import ClickAndPick from '../../Assets/Images/ClickAndPick.png'
import WMW from '../../Assets/Images/WMW.png'
import Mindfulness from '../../Assets/Images/Mindfulness.png'
import AnyStats from '../../Assets/Images/AnyStats.png'
import HM from '../../Assets/Images/HM.png'

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
			'Leafwire is recognized as the largest online cannabis business connectivity platform by FORBES. With over 50,000 users, I was part of developing various features such as connections, real-time newsfeed, advanced search, 3rd-party integrated job board, subscription-based marketplace, geo-location-based events, training, and learning.',
		french:
			"Leafwire est reconnue comme la plus grande plateforme de connectivité commerciale du cannabis en ligne par FORBES. Avec plus de 50000 utilisateurs, j'ai participé au développement de diverses fonctionnalités telles que les connexions, le fil d'actualité en temps réel, la recherche avancée, le tableau des offres d'emploi intégré tiers, le marché basé sur les abonnements, les événements basés sur la géolocalisation, la formation et l'apprentissage.",
	},
	TECHNOLOGIES: [
		'Micro-services with Node',
		'Express',
		'Micro-frontends with React',
		'Redux',
		'Agile',
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
		'Slack',
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
				'A multi-functional application(Group Project) that can track and manage data with the ability to generate pre-formatted reports at the click of a button. This application will enable mid-level management to generate snap-shot reports with critical information depicting the current strengths and weaknesses of the organization.',
			french:
				"Une application multifonctionnelle(Projet de groupe) qui peut suivre et gérer les données avec la possibilité de générer des rapports pré-formatés en un clic. Cette application permettra à la direction de niveau intermédiaire de générer des rapports instantanés contenant des informations critiques décrivant les forces et les faiblesses actuelles de l'organisation.",
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
		TITLE: 'AnyStats',
		IMAGE: AnyStats,
		DESCRIPTION: {
			english:
				'The app allows users to create any kind of two-dimensional data statistics and they will be represented in chosen charts. Users can share the statistics with the public or keep them private. The App followed MVC architecture with entity framework and it received a 100/100.',
			french:
				"L'application permet aux utilisateurs de créer tout type de statistiques de données bidimensionnelles et elles seront représentées dans des graphiques choisis. Les utilisateurs peuvent partager les statistiques avec le public ou les garder privées. L'application a suivi l'architecture MVC avec le cadre d'entité et a reçu un 100/100.",
		},
		TECHNOLOGIES: ['.NET', 'ChartJS', 'MVC', 'Entity Framework', 'Bootstrap'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/PraveenRDev/AnyStats-5204_PassionProject-n01442097',
		},
		LINK_2: {
			NAME: 'Presentation/Demo',
			URL: 'https://youtu.be/pkdv9tPjSH8',
		},
	},
	{
		TITLE: 'Click & Pick',
		IMAGE: ClickAndPick,
		DESCRIPTION: {
			english:
				'Completed an online course on building an eCommerce platform with MERN stack. Shopping cart, Payments, Reviews, and a full-fledged admin panel.',
			french:
				"A terminé un cours en ligne sur la création d'une plateforme de commerce électronique avec la pile MERN Panier, paiements, avis et un panneau d'administration à part entière.",
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
	{
		TITLE: 'Javascript Game',
		IMAGE: HM,
		DESCRIPTION: {
			english:
				'During my first semester, I created this game inspired by the traditional hangman game to teach arrays in an interesting way to my fellow students. The game received extremely positive feedback from both students and professors.',
			french:
				"Au cours de mon premier semestre, j'ai créé ce jeu inspiré du jeu du pendu traditionnel pour enseigner les tableaux de manière intéressante à mes camarades. Le jeu a reçu des commentaires extrêmement positifs de la part des étudiants et des professeurs.",
		},
		TECHNOLOGIES: ['JS', 'HTML', 'CSS'],
		LINK: {
			NAME: 'GitHub Repo',
			URL: 'https://github.com/PraveenRDev/arrayGame',
		},
		LINK_2: {
			NAME: 'Play Game',
			URL: 'http://com.hangman.arrays.s3-website-us-east-1.amazonaws.com/',
		},
	},
]
