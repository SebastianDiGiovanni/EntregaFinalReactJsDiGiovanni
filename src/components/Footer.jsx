import face from "../assets/img/facebook.svg"
import insta from "../assets/img/instagram.svg"
import twitter from "../assets/img/twitter.svg"
import youtube from "../assets/img/youtube.svg"
import logo from "../assets/img/logoFV.png"
import footer from "../assets/img/banner_footer.jpg"

const Footer = () => {
    return(
        
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="imgfooter" ><img src={footer} alt="" /></div>
                    <a href={"https://www.facebook.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={face} alt={"Facebook"} width={"24"}/></a>
                    <a href={"https://www.instagram.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={insta} alt={"Instagram"} width={"24"}/></a>
                    <a href={"https://www.twitter.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={twitter} alt={"Twitter"} width={"24"}/></a>
                    <a href={"https://www.youtube.com/"} className="ms-3" target={"_blank"} rel="noreferrer"><img src={youtube} alt={"Youtube"} width={"24"}/></a>
                </div>  
            </div>
            <hr />
            <div className="row">
                <div className="col8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Politica de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Politica de Devolucion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Metodos de Pago</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col4">
                    <p><img src={logo} alt={"Logo Anime Store"} width={"40"}/> © ANIME STORE DIGIO - 2023</p>
                </div>
            </div>   
        </div>
    )
}

export default Footer;