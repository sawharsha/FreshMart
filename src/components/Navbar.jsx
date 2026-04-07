import logo from "../assets/logo.png";

function NavBar ({ cartCount }){
    return(

        <nav className="navbar">
            <div className="logo-container">
                <img 
                src={logo}
                alt="FreshMart - logo"
                className="logo"
                />
                <h1>FreshMart</h1>
            </div> 
            <ul className="nav-menu">
                    <li>🏠Home</li>
                    <li>ℹ️About</li>
                    <li>🆘Help</li>
                    <li>🛒Cart ({cartCount})</li>
                </ul>
            
        </nav>

    );
}

export default NavBar;