import React , {useState, useEffect } from 'react';
import { ItemDetail }  from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../services/firebase';

const ItemDetailContainer = () => {

  const { itemId } = useParams()
  const [selectedItem, setSelectedItem] = useState()
  const [load, setLoad] = useState(true)

  const getSelected = async()=>{
    try {
      const document = doc(db,"productos", itemId)
      const response = await getDoc(document)
      const result = { id: response.id, ...response.data() }
      setSelectedItem(result)
      setLoad(false)
    } catch (error) {
      console.warn("Error: ", error)
    }
  }

  useEffect(() => {
    getSelected()
  },[itemId])

      return (
          <>
            { load ? <h3>cargando...</h3> : <ItemDetail product={selectedItem}/> }
          </>
        )
}
  
export default ItemDetailContainer;
