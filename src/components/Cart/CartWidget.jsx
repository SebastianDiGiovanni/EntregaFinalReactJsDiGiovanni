import React, { useContext } from 'react'
import CarritoImg from '../../assets/img/carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

  const { quantity, total } = useContext(CartContext);

  return (
    <div className="carritoNav">
        <Link className="link" to={'/cart'}><img src={CarritoImg} alt="" /></Link>
        {total > 0 && <div className="cantidadCarrito">{quantity}</div>}
    </div>
  )
}

export default CartWidget;
