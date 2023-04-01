import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            post: {
                title: "first post",
                body: "This is my first post in this blog",
            },
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
