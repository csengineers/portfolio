import { Heading, Text, Button, Stack, UnorderedList, ListItem, Card, CardHeader, CardBody } from '@chakra-ui/react';

export default function ProjectCard(props) {
    const {
        title,
        url,
        leadText,
        features,
        skills,
    } = props;

    return (
        <Card className="projects p-1">
            <CardHeader pb={0}>
                <div className="project-title">
                    <a href={url} target="_blank">
                        <Text as="h3" fontSize='2xl' fontWeight="600" >{title}</Text>
                    </a>
                </div>
            </CardHeader>
            <CardBody pt={2}>
                <div className="project-description mt-2">
                    <Text mb={3} fontSize="lg">
                        {leadText}
                    </Text>
                    <p className="main-features mb-2">Main features</p>
                    <UnorderedList>
                        {features.map((feature, index) => <ListItem key={`featured-item-${index}`}>{feature}</ListItem>)}
                    </UnorderedList>
                </div>
                <div className="project-content group">
                    <div className="d-flex project-skils">
                        <div className="pro-tools-container">
                            <p>
                                {skills.map((skill, index) => <span key={`project-card-${index}`} className="btn btn-sm btn-light">{skill}</span>)}
                            </p>
                        </div>
                    </div>
                </div>
                <Button mt={2} colorScheme='brand' as='a' href={url} target='_blank'>Preview</Button>
            </CardBody>
        </Card>
    )
}