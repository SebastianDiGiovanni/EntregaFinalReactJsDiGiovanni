import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where, } from "firebase/firestore";


const ItemListContainer = ({greeting}) => { 

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {name} = useParams()

  useEffect(()=> {

    setLoading(true);

    const productsCollection = collection(db, 'products');
    const consulta = name
    ? query(productsCollection, where("categoria", "==", name))
    : productsCollection;

    getDocs(consulta)
      .then((data)=> {
        const productosFiltrados = data.docs.map((element)=> {
          return {
            ...element.data(),
            id: element.id
          };
        });
        setProductos(productosFiltrados);
        setLoading(false);
      })
      .catch(()=>{
        console.error("error de conexión");
      })

  },[name]);


  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : 
        <>
          <div className="tituloPrincipal"><h1>{greeting}</h1></div>
          <ItemList array={productos} />
        </>
        }
        </>
      }
    </>
  )
}

export default ItemListContainer;

