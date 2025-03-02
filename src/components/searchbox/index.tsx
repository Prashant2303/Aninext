import { useState } from "react"
import { useNavigate, useParams } from "react-router";

export function SearchBox() {
    const navigate = useNavigate();
    const { query: queryParam } = useParams();
    const [query, setQuery] = useState(queryParam);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter" && query !== queryParam) {
            navigate(`/search/${query}`)
        }
    }

    return <input
        className="border rounded h-10 pl-2.5"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
    />
}