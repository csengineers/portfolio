const credentials = [
    {
        category: 'Education',
        entries: [
            {
                institution: 'Lehman College (CUNY)',
                institutionLink: 'http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major',
                credential: 'Bachelor of Science in Computer Science',
                details: 'Relevant courses: web programming, software engineering, databases, computer organization, and operating systems.',
                dates: '2019 - 2020',
            },
            {
                institution: 'Bronx Community College (CUNY)',
                institutionLink: 'http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/',
                credential: 'Associate of Science in Computer Science',
                details: 'Relevant courses: programming methods I and II, and data structures and algorithms.',
                dates: '2017 - 2018',
            },
        ]
    },
    {
        category: 'Certificates',
        entries: [
            {
                institution: 'Coursera',
                institutionLink: 'https://grow.google/certificates/ux-design/#?modal_active=none',
                credential: 'Google UX Design Certificate',
                dates: 'Jun 2022',
            },
            {
                institution: 'Tech Talent Pipeline Residency Program at Lehman College',
                institutionLink: 'https://lehmancuny2x.github.io/',
                credential: 'Full Stack Web Development Certificate',
                dates: 'Jun 2019',
            },
        ]
    },
    {
        category: 'Honors & Awards',
        entries: [
            {
                institution: 'Bronx Community College',
                institutionLink: 'http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/',
                credential: 'Computer Science Award',
                details: 'Computer Science award for outstanding academic achievement in Computer Science.',
                dates: 'May 2019',
            },
            {
                institution: 'Lehman College',
                institutionLink: 'http://lehman.smartcatalogiq.com/en/2017-2019/Undergraduate-Bulletin/Academic-Departments-and-Programs/Computer-Science/Computer-Science-B-S-57-61-Credit-Major',
                credential: 'Guttman Transfer Scholarship Recipient',
                dates: 'Jan 2019',
            },
            {
                institution: 'Bronx Community College',
                institutionLink: 'http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/',
                credential: 'Bronx Community College Foundation Scholarship Recipient',
                dates: 'Sep 2018',
            },
            {
                institution: 'Bronx Community College',
                institutionLink: 'http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/',
                credential: 'CUNY-Athletic Conference-Scholar-Athlete Award',
                dates: 'May 2018',
            },
            {
                institution: 'Bronx Community College',
                institutionLink: 'http://www.bcc.cuny.edu/academics/academic-departments/mathematics-and-computer-science-department/degree-certificate-courses/computer-science-as/',
                credential: 'CUNY-Athletic Conference-Scholar-Athlete Award',
                dates: 'May 2017',
            },
        ]
    }
];


function CredentialItem(props) {
    const { entries } = props;
    return (
        <div>
            {entries.map((entry, index) => {
                const { institution, institutionLink, credential, dates, details } = entry;
                return (
                    <div key={`credential-${index}`} className="experience d-flex mb-3">
                        <div className="logo-container">
                            <a target="_blank"
                                href={institutionLink}>
                                <i className="fa-solid fa-building"></i>
                            </a>
                        </div>
                        <div className="experience-content">
                        <p className="date-location mb-2">{dates}</p>
                            <h3 className="company mb-2">
                                <a target="_blank"
                                    href={institutionLink}>{institution}
                                    </a>
                            </h3>
                            <div>
                                <h4 className="position mb-2">
                                    {credential}
                                </h4>
                                {details && (
                                    <p className="date-location">{details}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

const data = credentials.map(credentialData => {
    const { category } = credentialData;
    return {
        heading: category,
        content: <CredentialItem {...credentialData} />,
    }
});

export default data;