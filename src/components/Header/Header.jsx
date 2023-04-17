import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { db } from '../../firebase/firebase';
import { getDocs, collection } from "firebase/firestore";

const Header = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=> {

    const productsCollection = collection(db, 'categories');
    getDocs(productsCollection)
    .then((data)=> {
        const productosFiltrados = data.docs.map((element)=> {
          return {
            ...element.data()
          };
        });
        setProductos(productosFiltrados);
      })
      .catch(()=>{
        console.error("error de conexión");
      })

  },[]);

  return (
    <header>
        <NavBar array={productos}/>
    </header>
  )
}

export default Header;
