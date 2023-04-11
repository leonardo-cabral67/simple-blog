import Head from "next/head";
import {getPost, getSlugs} from '../../lib/posts';

export async function getStaticPaths() {
    const slugs = await getSlugs()
    return {
        paths: slugs.map(slug => ({
            params: {slug}
        })),
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const post = await getPost(slug)
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
