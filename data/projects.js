const projects = [
    {
        name: 'Remote Job Board for JavaScript Developers',
        link: 'https://github.com/Jeffrey-A/remotejavascriptjobs#preview',
        description: 'Advanced remote job board that list JavaScript jobs, allowing the user to filter by employment type, development type, main technology, and salary estimation. In addition, it allows employers to post job ads after making a payment through the integrated Stripe payment gateway.',
        features: [
            'Fetches and displays jobs stored in a Firebase real-time database instance.',
            'Allows employers to post job ads after making a payment.',
            'Integrated the Stripe API to handle payments.',
            'Integrated the SendGrid API to send payment confirmation emails.',
            'Setup markdown blog using the gray-matter npm package.',
            'Dark and light theme modes.'
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React JS',
            'Next JS',
            'Stripe',
            'Firebase',
            'Sendgrid',
        ]
    },
    {
        name: 'Goals Management App',
        link: 'https://github.com/Jeffrey-A/build-your-future-today#preview',
        description: `Multi-user goals management system that allows users to
        create goals, create daily tasks for their goals, and
        keep track of their progress.`,
        features: [
            'Allows creating, editing, and deleting goals from the system.',
            'Allows creating, editing, and deleting tasks for each goal.',
            'Implemented a Goal Lister page where you can view all the goals at once or filter by name.',
            'Implemented a drag and drop goals Board using browser native events.',
            'Implemented user authentication, so that a user can create an account and start managing his goals after logging in.',
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React JS',
            'Node JS',
            'Express',
            'PostgreSQL',
        ]
    },
    {
        name: 'Online Shopping Store for Women',
        link: 'https://github.com/Jeffrey-A/eCommerceProject#home',
        description: `Full stack e-commerce with shopping cart functionality,
        real payment handling and mobile friendly.`,
        features: [
            'Fetches and displays available products stored in a PostgreSQL database.',
            'Implemented shopping cart functionality, allowing the user to add multiple products to the cart, select quantity for each product and display the total price to pay.',
            'Integrated the Stripe API to handle payments.',
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React JS',
            'Node JS',
            'Express',
            'PostgreSQL',
        ]
    },
    {
        name: 'City Search',
        link: 'https://github.com/Jeffrey-A/citySearch#preview',
        description: `When given a city name, it fetches and displays all the
        zip codes of the given city and displays information
        about each zip code.`,
        features: [
            'Allows the user to input a city name.',
            'Gets zip code information for the inputted city from a third party API.',
            'Displays all the zip codes for the given city.',
            'Displays state, location, population, and total wages for each zip code.',
        ],
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React JS',
        ]
    },
];

export default projects;