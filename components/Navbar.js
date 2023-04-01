import Link from "next/link";

export default function Navbar() {
    return (
        <ul className="flex gap-8 text-lg text-blue-900 font-semibold">
            <li className="hover:underline">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
                <Link href="/about">About</Link>
            </li>
        </ul>
    )
}