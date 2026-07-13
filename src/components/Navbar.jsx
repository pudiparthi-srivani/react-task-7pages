 function Navbar() {
  return (

        <div className="clearwave">
        <div className="nav">
        <h1 className="logo"><span className="clear">clear</span><span className="wave">wave</span></h1>
        <ul className="hi">
        <li>App</li>
        <li>Features</li>
        <li>Pricing</li>    
        <li>Reviews</li>
        <li>FAQ</li>
        </ul>
        <div className="right-side" >
        <a href="#"
        style={{
        textDecoration: 'none',
        color:'#3f5f5f',
        }}>Sign in</a>
        <button className="button-up1">Start Free Trial</button>
        </div>
        </div>
        </div>

 );
}

export default Navbar;