export default function Navbar(){
    return (
        <nav className="navbar">
            <h1 id="intro">Welcome to my Weather App!</h1>
        <div id="searchContainer">
            <input className="searchBox" type="text" placeholder="Please Enter City Name" id="searchInput"/>
            <button className="searchBtn" id="searchBtn">Go!</button>
        </div>
        </nav>
    )
}