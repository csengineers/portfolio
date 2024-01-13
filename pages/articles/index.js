import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import {
    Heading,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
} from '@chakra-ui/react'

export default function Blog({ posts }) {
    return (
        <main>
            <div className="container py-5">
                <Heading as="h1" size="lg">Articles</Heading>
                <div className="mt-4 mb-5">
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Date</Th>
                                    <Th>Name</Th>
                                    <Th>Category</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {posts.map((post) => {

                                    const { slug, frontmatter } = post;

                                    const { title, author, category, date, bannerImage, tags } =
                                        frontmatter;

                                    return (
                                        <Tr key={title}>
                                            <Td>{date}</Td>
                                            <Td>
                                                <Link href={`/articles/${slug}`}>
                                                    {title}
                                                </Link>
                                            </Td>

                                            <Td>{category}</Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </main>
    );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs.readdirSync("data/articles");

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`data/articles/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
            posts,
        },
    };
}
