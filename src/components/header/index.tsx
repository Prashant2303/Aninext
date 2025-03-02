import { Link } from "react-router";

export function Header() {
    return <header className="flex justify-center py-2">
        <Link to='/'>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-[45deg,#02c1ff,#c800ff]">
                AniNext
            </h1>
        </Link>
    </header>
}