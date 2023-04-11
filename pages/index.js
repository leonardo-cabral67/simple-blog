import Head from "next/head";
import Link from "next/link";
import { getSlugs } from "../lib/posts";

export async function getStaticProps() {
    const posts = await getSlugs()

    return {
        props: {
            posts
        }
    }
    
}

export default function Home({posts}) {
    return (
        <>
            <Head>
                <meta title="description" value="Hey, my name is Leonardo and this is my personal blog"/>
                <title>Blog</title>
            </Head>
            <main className="ml-8">
                <h1 className="text-6xl text-gray-800 mb-12">Leonardo's Blog</h1>
                <h2 className="text-4xl text-gray-700 mb-6">
                    Posts: 
                </h2>
                <ul className="ml-10">
                    {
                        posts.map(post => (
                            <li className="text-lg text-blue-400">
                                <Link href={`/posts/${post}`}>{post}</Link>    
                            </li>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}