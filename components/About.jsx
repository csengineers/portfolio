import _ from 'lodash';
import React from 'react';
import { Heading, Text, Tooltip, Stack } from '@chakra-ui/react';

import { linkedinLink, githubLink } from '@/data';

const  sectionHeading = 'About';
const imageSrc = 'images/about-image.jpeg';

export default function About(props) {
    return (
        <div id="about" className="section">
            <Heading mb={4}>{sectionHeading}</Heading>
            <div className="d-lg-flex justify-content-between mt-5">
                <AboutContent />
                <div className="about-photo-container mt-5 mt-lg-0 mb-3 mb-0 order-0">
                    <img src={imageSrc} alt="About image" />
                </div>
            </div>
        </div>
    )
}

function AboutContent(props) {
    return (
        <div className="about-text order-1">
            <Text fontSize='lg' mb={3}>
                I’m a senior computer science student at Lehman College with a strong understanding of data structures, algorithms, and object-oriented programming. In addition, through the development of personal projects, I’ve taught myself web development, and I’m eager to get an internship in this field.
            </Text>
            <Skills skillSections={[
                {
                    label: 'Proficient in:',
                    skills: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Sass',
                        'Bootstrap 5',
                        'React JS'
                    ]
                },
                {
                    label: 'Prior experience:',
                    skills: [
                        'TypeScript',
                        'Redux',
                        'Storybook',
                        'jQuery',
                    ]
                },
            ]} />
            <div className="mt-4 social-media-container--light">
                <a className="d-inline-block me-3" target="_blank" href={githubLink}><i
                    className="fa-brands fa-github me-2"></i>GitHub</a>
                <a className="d-inline-block" target="_blank" href={linkedinLink}><i
                    className="fa-brands fa-linkedin me-2"></i>LinkedIn</a>
            </div>
        </div>
    )
}


function Skills({ skillSections }) {
    return (
        <div className='mt-4'>
            <Heading as='h3' size='md'>Technical Skills:</Heading>
            <div className='py-3'>
                {_.map(skillSections, (skillSection, index) => {
                    const { label, skills } = skillSection;
                    return (
                        <React.Fragment key={`skill-section-${index}`}>
                            <p className={index > 0 ? 'mt-3 mb-1' : 'mb-1'}>{label}</p>
                            <div className='skills-grid'>
                                {_.map(skills, skill => <span key={`skill-section-item-${index}`} className='btn btn-secondary btn-sm skill'>{skill}</span>)}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}