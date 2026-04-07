import logo from "../assets/logo.jpeg";

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

            <div className="cart-info">
               🛒 {cartCount}
            </div>
        </nav>

    );
}

export default NavBar;