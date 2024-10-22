import "./Header.css"
const Header = () =>{
    return(
        <div className="Nav">

            <div className="Snap">
            <h1>Snap</h1>
            <p>Features</p>
            <p>Company</p>
            <p>Carrers</p>
            <p>About</p>
            </div>

            <div className="button">
                <button>Login</button>
                <button id="Register"> Register</button>
            </div>


        </div>
    )
}
export default Header