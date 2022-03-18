import React , {useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../services/firebase';

const ItemListContainer = () => {
  
  const { categoryId } = useParams()
  
  const [items, setItems] = useState([])
  const [load, setLoad] = useState(true);
  
  const getData = async () => {
    try {
      const itemsCollection = collection(db,"productos")
      const col = await getDocs(itemsCollection)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setItems(result)
      setLoad(false)
    } catch (error) {
      console.warn("Error: ", error)
    }
  } 
  
  const getDataCategory = async () => {
    try {
      const itemsCollection = collection(db,"productos")
      const col = await getDocs(itemsCollection)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setItems(result.filter(e=>e.category === categoryId))
      setLoad(false)
    } catch (error) {
      console.warn("Error: ", error)
    }
  }

  useEffect(() => {
    categoryId?getDataCategory():getData()
  }, [categoryId])

  return (
          <>
            <div className="container">
              <div className="row">
                {load ? 
                <div>
                  <br/><h2>Cargando...</h2>
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
                :<ItemList data={items}/>}
              </div>
            </div>
          </>
    );
  }
  export default ItemListContainer;
