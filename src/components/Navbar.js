export default function Navbar(props){

    //This function send city name to the call API function
    function handleClick(){
        var city = document.getElementById("searchInput").value;
        props.handleClick(city);
    }

    return (
        <nav className="navbar">
            <h1 id="intro">Welcome to my Weather App!</h1>
        <div id="searchContainer">
            <input className="searchBox" type="text" placeholder="Please Enter City Name" id="searchInput"/>
            <button className="searchBtn" id="searchBtn" onClick={handleClick}>Go!</button>
        </div>
        </nav>
    )
}