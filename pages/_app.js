import Head from "next/head";
import Navbar from "../components/Navbar";
import "../globals.css";

export default function App({Component, componentProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href="icons/favicon.ico"/>
            </Head>
            <header className="ml-8 mt-6 mb-20">
                <Navbar />
            </header>
            <Component/>
        </>
    )
}