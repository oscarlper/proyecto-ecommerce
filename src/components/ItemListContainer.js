import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemListContainer() {
    return<>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col col-12">
                <h3>Ofertas de la semana</h3>
            </div>
            <div className="col col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="localhost:3000" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col col-4">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="localhost:3000" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col col-4">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="localhost:3000" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>;
}

export default ItemListContainer;