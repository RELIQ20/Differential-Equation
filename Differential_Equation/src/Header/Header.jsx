import './Header.css';
function Header(){
    return(
        <>
        <header>
            <div className="header-left">
                <img src="./src/assets/letter-n.png" alt="Nathaniel" />
                <h1 className="headtitle">DIFFERENTIAL EQUATION</h1>
            </div>
            <nav className="navmain">
                <ul className="navUL">
                    <li><a href="" target="_blank">About</a></li>
                    <a href="" target="_blank"><img src="./src/assets/information-button.png" id="info"></img></a>
                </ul>
            </nav>
        </header>
      </>
    ); 
}

export default Header