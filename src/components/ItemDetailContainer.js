import React , {useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { productsDB } from '../data/productsDB';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(props) {

  const itemId = useParams()
  
  const {greetings}=props
  const [product, setProductDetail] = useState({})

  useEffect(() => {
    dbProducts().then(res => setProductDetail(res.find(product => product.id === parseInt(itemId.id) )))
  }, [itemId.id]);

   const dbProducts = () => {
      return new Promise((res, rej) => {
          setTimeout(() => {
          res(productsDB);
          }, (Math.random() * 2000));
      });
      };

      return (
          <div>
            <h2>{greetings}</h2>
              <>
                <div className="container">
                  <div className="row">
                    <ItemDetail productSelected={product}/>
                  </div>
                </div>  
              </>
          </div>
        );
      }
  
        export default ItemDetailContainer;
