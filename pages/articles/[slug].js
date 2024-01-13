import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';

import Link from "next/link";

import {
  Heading,
  Divider,
} from '@chakra-ui/react';

// The page for each post
export default function Post({ frontmatter, content }) {

  const { title, author, category, date, bannerImage, tags } = frontmatter

  return (
    <main>
      <div className="container py-5">
        <div className="pb-2">
          <Link href='/articles'>
          <i class="fa fa-arrow-left me-2" aria-hidden="true"></i>
            <span>Articles</span>
          </Link>
        </div>

        <div className="article-header mb-4">
          <Heading as="h1" size="lg">{title}</Heading>
          <div className="d-flex pt-2">
            <p className="pe-3">{date}</p>
            <p>{category}</p>
          </div>
        </div>
        <Divider style={{backgroundColor: 'transparent'}} />
        <div className="pt-5" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("data/articles");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`data/articles/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
}