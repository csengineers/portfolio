import { Heading, Button, ButtonGroup, Text } from "@chakra-ui/react";

import { heroData } from "@/data";

function Hero(props) {
    const { introText, headline, contactLink, resumeLink } = heroData;

    return (
        <div className="container hero-wrapper">
            <div className="d-flex">
                <div className="col-lg-7">
                    <div className="hero-content">
                        <p>{introText}</p>
                        <Heading mt={2} id="my-name" className="name"></Heading>
                        <Text fontSize="xl" className="mb-5 hero-description">
                            {headline}
                        </Text>
                        <div>
                            <Button colorScheme="brand" as="a" href={contactLink.url} me={2}>
                                {contactLink.text}
                            </Button>
                            <Button
                                colorScheme="brand"
                                as="a"
                                href={resumeLink.url}
                                target="_blank"
                                variant="outline"
                            >
                                {resumeLink.text}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block align-self-center">
                    {heroData.image && (
                        <img src={heroData.image} alt="Hero image" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;
