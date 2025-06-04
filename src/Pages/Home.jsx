import Footer from "../components/Footer"
import Nav from "../components/nav"
import './home.css'
import beef from '/src/assets/images/Beef.jfif'
import seefood from '/src/assets/images/seefood.jfif'
import pasta from '/src/assets/images/Pasta.jfif'
import { Link } from "react-router-dom"


export default function Home(params) {
    

    return(
        <>
            <Nav/>
              <h1>Chez l'Ancien</h1>
              <div className="header">
               
              
              <div className="header-text">
               <h3>Bienvenu dans notre restaurant ou le Seefood, Beef et pates sont catégories principales.
               </h3>
                </div>
               <div className="images-holder">
                <div className="card-home">
                <img src={seefood} className="demo" alt="" />
                <div className="home-info">
                    <h3>SeaFood</h3>
                    <Link to={"/sea"} className="btn link">Voir la carte</Link>
                </div>
                </div>
               
                <div className="card-home">
                 <img src={pasta} className="demo" alt="" />
                <div className="home-info">
                    <h3>Pasta</h3>
                    <Link to={"/pasta"} className="btn link">Voir la carte</Link>
                </div>
                </div>
             
                <div className="card-home">
                <img src={beef} className="demo" alt="" />
                <div className="home-info">
                    <h3>Beef</h3>
                    <Link to={"/beef"} className="btn link">Voir la carte</Link>
                </div>
                </div>

               </div>
             
              
             
          
              </div>
             
            <Footer/>
          
        </>
    )
}