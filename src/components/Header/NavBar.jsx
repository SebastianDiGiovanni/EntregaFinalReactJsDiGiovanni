import React from 'react'
import logo from '../../assets/img/logoFV.png';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom'


const NavBar = ({array}) => {  

    const arrayDeCategorias = array.map((element) => element.categoria);


    return (
        <div className="flexNavBar">
            <div className="logo"><img className="logoImagen" src={logo} alt="Logo FV Guitars" /><Link className="link" to={'/'}>Anime Store DiGio</Link></div>
            <nav>
                <ul className="navBar">
                    {arrayDeCategorias.map((element,index) => <li key={index}><Link className="link" to={`/categorias/${element}`}>{element}</Link></li>)}
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </div>
        )
}

export default NavBar;