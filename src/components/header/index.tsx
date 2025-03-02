import { Link } from "react-router";

export function Header() {
    return <header>
        <Link to='/'>
            <h1 className="text-3xl font-bold flex justify-center py-2">AniNext</h1>
        </Link>
    </header>
}