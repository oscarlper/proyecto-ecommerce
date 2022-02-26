import React , {useState, useEffect } from 'react';
import ItemList from './ItemList';
import { productsDB } from '../data/productsDB';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {

    const {greetings}=props
    const [products, setProducts] = useState([]);
    
    const category = useParams()
    
    useEffect(() => {
      if (category.id) {
        const productsFiltered = productsDB.filter(unProducto =>unProducto.category === category.id)
        dbProducts().then(res => setProducts(productsFiltered));
      } else {
        dbProducts().then(res => setProducts(res));
      }
    }, [category]);
    
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
                      <ItemList products={products}/>
                    </div>
                  </div>
                </>
            </div>
          );
          
          
        }
        export default ItemListContainer;
