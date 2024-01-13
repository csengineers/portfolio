import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from '@chakra-ui/react';

export default function Accordions({ accordions = [] }) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {accordions.map((accData, index) => {
                return (
                    <AccordionItem key={`accordion-${index}`}>
                        <h2>
                            <AccordionButton outline='none' bg="#f9f9f9">
                                <Box as="span" flex='1' textAlign='left'>
                                   <Text fontSize="xl">{accData.heading}</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {accData.content}
                        </AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}