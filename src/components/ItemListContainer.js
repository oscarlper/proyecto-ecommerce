import React , {useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {

    const category = useParams()
    const {greetings}=props
    const [tableProducts, setProducts] = useState([]);

    console.log({category});

    useEffect(() => {
      {/*
        dbProducts().then((res) => setProductFilter(res.find(product => product.id === 3 )))
      */}
      dbProducts().then((res) => setProducts(res));
    }, []);

    const dbProducts = () => {
        const tableProducts = [
            { id: 1, stock: 5, category: 'intel', name: 'Nuc Intel mini PC', description: 'intel Core i5 mini pc 1cpu 2cores 8threads, ssd 240gb, 16gb ram', image: './image/nuc.jpg', price: '125000' },
            { id: 2, stock: 10, category: 'industrial',name: 'PC Industrial Fanless', description: 'Celeron 2core 4threads 4ghz, 8gb ram, ssd 64gb', image: './image/industrial_pc.jpg', price: '65000'  },
            { id: 3, stock: 3, category: 'firewall', name: 'Netgate pfsense', description: 'Firewall pfsense sobre plataforma de HW Netgate', image: './image/netgate.jpg' , price: '105000' },
        ];

        
        return new Promise((res, rej) => {

            setTimeout(() => {
            res(tableProducts);
            }, (Math.random() * 2000)+2000);
            console.log(tableProducts);
        });
        };

        return (


            <div>
              <h2>{greetings}</h2>
                <>
                  <div className="container">
                    <div className="row">
                      <ItemList tableProducts={tableProducts}/>
                    </div>
                  </div>
                </>
            </div>
          );
          
          
        }
        export default ItemListContainer;
