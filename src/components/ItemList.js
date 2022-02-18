import React , {useState, useEffect } from 'react';
import Item from './Item';

function ItemList() {

    const [tableProducts, setProducts] = useState([]);

    useEffect(() => {
        dbProducts().then((res) => setProducts(res));
    }, []);

    const dbProducts = () => {
        const tableProducts = [
            { id: 1, stock: 5,  name: 'Nuc Intel mini PC', description: 'intel Core i5 mini pc 1cpu 2cores 8threads, ssd 240gb, 16gb ram', image: 'https://http2.mlstatic.com/D_NQ_NP_670299-MLA48623545004_122021-V.webp' },
            { id: 2, stock: 10, name: 'PC Industrial Fanless', description: 'Celeron 2core 4threads 4ghz, 8gb ram, ssd 64gb', image: 'https://http2.mlstatic.com/D_NQ_NP_951509-MLA46490871642_062021-V.webp'  },
            { id: 3, stock: 3,  name: 'Netgate pfsense', description: 'Firewall pfsense sobre plataforma de HW Netgate', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlTsM8nlhlsQBZ2_NbRiAwjP2_0obovZ2Sj7Rp_vP-zxWwqWwUpvxVHWRY9pZdWYny4N911NSb4BI&usqp=CAc'  },
        ];
        return new Promise((res, rej) => {
            setTimeout(() => {
            res(tableProducts);
            }, Math.random() * 3000);
        });
        };

        return (
            <div>
              {tableProducts?.length === 0 ? (
                <p>Cargando datos...</p>
              ) : (
                <>
                  {tableProducts.map((product) => (
                    <Item itemStock = {product.stock} itemTitle = {product.name} itemDescription = {product.description} itemImage = {product.image}/>
                    ))}
                </>
              )}
            </div>
          );
          
          
        }
        export default ItemList;
