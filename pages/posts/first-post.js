import {readFile} from 'fs/promises';
import Head from "next/head";

async function getPost() {
    const data = await readFile("content/posts/first-post.json")
    const post = JSON.parse(data)
    return post
}

export async function getStaticProps() {
    const post = await getPost()
    return {
        props: {
            post
        },
    };
}

export default function FirstPage({post}) {
    console.log('post ->', post)
    return (
        <>
            <Head>
                <title>{post.title} - Blog</title>
            </Head>
            <main className="ml-8">
                <h1 className="text-6xl text-gray-800 mb-8">{post.title}</h1>
                <p className="text-lg">{post.body}</p>
            </main>
        </>
    )
}
