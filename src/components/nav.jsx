import { Link } from 'react-router-dom'
import './nav.css'
import logo from "/src/assets/images/logo.webp"
export default function Nav(props) {
    

    return(
        <>
            <nav>
                <div className="logo-cont">
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className="ancres">
                    <Link to={"/"} className='link'><p className='ancre'>Home</p></Link>
                    <Link to={"/sea"} className='link'><p className='ancre'>Seafood</p></Link>
                    <Link to={"/beef"} className='link'><p className='ancre'>Beef</p></Link>
                    <Link to={"/pasta"} className='link'><p className='ancre'>Pates</p></Link>
                </div>
            </nav>
        </>

    )
}