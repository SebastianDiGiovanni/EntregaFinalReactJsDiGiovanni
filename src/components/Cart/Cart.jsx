import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext);

    return (
        <>
            {total === 0 ? 
                <>
                    <div id="totalCarrito">  
                        <div className="cardFlexCarrito" id="tarjetaTotal">
                            <section className="cardHorizontal" id="totalizador">
                                <div className="cardText"><p id="totalCarritoText">El carrito esta vacio </p></div>
                                <Link className="link" to={'/'}><div className="cardPrice"><p id="totalCarritoPrice">Ver Productos</p></div></Link>
                            </section>
                        </div>
                    </div>
                </> :
                <>
                    <div className="tituloPrincipal"><h1>{"Tu Compra:"}</h1></div>
                    <div className="cardFlexCarrito">
                        {cart.map((product) => {
                            return (
                            <section className="cardHorizontal" key={`card-${product.id}`}>
                                <div className="cardText"><p id="carritoText">{product.producto}</p></div>
                                <div className="cardPrice"><p id="carritoPrice">{product.quantity}</p></div>
                                <div className="cardText"><p>X</p></div>
                                <div className="cardPrice"><p id="carritoPrice">{product.precio} $</p></div>
                                <button className="cardCarritoButton" id={`button-${product.id}`} onClick={()=>removeItem(product.id)} >Quitar</button>
                            </section>
                            )
                        })}
                    </div>
                    <div id="totalCarrito">  
                        <div className="cardFlexCarrito" id="tarjetaTotal">
                            <section className="cardHorizontal" id="totalizador">
                                <div className="cardText"><p id="totalCarritoText">TOTAL:</p></div>
                                <div className="cardPrice"><p id="totalCarritoPrice">{total} $</p></div>
                                <Link className="link" to={'/checkout'}><button className="cardCarritoButton2" >Finalizar Compra</button></Link>
                            </section>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Cart;
