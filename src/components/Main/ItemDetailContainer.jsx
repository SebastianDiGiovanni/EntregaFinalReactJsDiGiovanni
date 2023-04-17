import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {  

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  useEffect(()=> {

    setLoading(true);

    const productsCollection = collection(db, 'products');
    const productoElegido = doc(productsCollection,id)
    getDoc(productoElegido)
    .then((data)=>{
      setProducto({
        ...data.data(),
        id: data.id
      })
    })
    .finally(()=>{
      setLoading(false);
    })
    
  },[id]);

    return (
        <>
            {loading ? <h1>Cargando...</h1> : <ItemDetail key={id} objeto={producto} />}
        </>
    )
}

export default ItemDetailContainer;
