import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta title="description" value="Hey, my name is Leonardo and this is my personal blog"/>
                <title>Blog</title>
            </Head>
            <main className="ml-8">
                <h1 className="text-6xl text-gray-800">Leonardo's Blog</h1>
            </main>
        </>
    )
}