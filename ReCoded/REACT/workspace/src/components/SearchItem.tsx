import SearchProps from '../models/Search.props'

export default function SearchItem({ search, setSearch }: SearchProps) {
    return (
        <form className="search-form container" action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="search"></label>
            <input
                type="text"
                placeholder="Search"
                role='searchbox'
                id='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}
