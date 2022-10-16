import React from 'react';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

export default class Home extends React.Component {
  render() {
    
    return (
    <div>
        <NavBar/>
        <main role="main" className="container" id="content">
        <div className="text-center mt-5 pt-5">
            <h3>1. Crear función que reciba como parámetros dos números y que devuelva la suma de ellos.</h3>
            <form id="ejercicioSuma">
                <div className="form-row">
                    <div className="input-group">
                        <div className="col-md-6 mb-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" >Sumando 1</label>
                                </div>
                                <input className="form-control input-data" min='0' type="number" value="1"/>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" for="inputGroupSelectMarca">Sumando 2</label>
                                </div>
                                <input className="form-control input-data" min='0' type="number" value="1"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type ="submit" className="btn btn-success">Suma</button>
            </form>
            <p>Resultado: </p>
        </div>

        <div className="text-center mt-5">
            <h3>2. Crear función que determine si un número es par o impar.</h3>
            <form id="ejercicioParImpar">
                <div className="form-row mb-3">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectMarca">Numero</label>
                            </div>
                            <input className="form-control input-data" min='0' type="number" value="1"/>
                        </div>
                    </div>
                </div>
                <button type ="submit" className="btn btn-success">Par o Imar</button>
            </form>
            <p>Resultado: </p>
        </div>

        <div  className="text-center mt-5">
            <h3>3. Crear un objeto carro. Introduce marca, numero de puertas, modelo y precio. </h3>
            <form id="ejercicioCrearCarro">
                <div className="form-row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectMarca">Marca</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelectMarca">
                                <option value="Audi">Audi</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Seat">Seat</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectPuertas">Nº Puertas</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelectPuertas">
                                <option value="2">2 Puertas</option>
                                <option value="4">4 Puertas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectModel">Modelo</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelectModel">
                                <option value="New">New</option>
                                <option value="Old">Old</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="customRange1" className="form-label">Price:</label>
                        <input type="range" className="form-range" id="customRange1" min="20000" max="60000" step="5000" 
                            oninput="this.nextElementSibling.value = this.value + '€'"/>
                        <output>40000€</output>
                    </div>
                </div>
                <button type ="submit" className="btn btn-success">Crear Carro</button>
            </form>
            <p>Carro creado: </p>
        </div>

        <div className="form-group text-center mt-5">
            <h3>4. Crear una función que devuelva la información del carro en la posición: </h3>
            <form id="ejercicioMostrarCarro">
                <div className="form-row mb-3">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectMarca">Posición</label>
                            </div>
                            <input className="form-control input-data" min='1' type="number" value="1"/>
                        </div>
                    </div>
                </div>
                <button type ="submit" className="btn btn-success">Encontrar Carro</button>
            </form>
            <p>Carro encontrado:</p>
        </div>

        <div className="text-center mt-5">
            <h3>5. Crear un array de 10 números</h3>
            <form id="ejercicioCrearArray">
                <button type ="submit" className="btn btn-success">Crear Array</button>
            </form>
            <p>Array creado:</p>    
        </div>

        <div className="text-center mt-5">
            <h3>5. Crear una función que elimine los números pares de ese array.</h3>
            <form id="ejercicioBorrarPares">
                <button type ="submit" className="btn btn-success">Borrar pares</button>
            </form>
            <p>Array resultado:</p>    
        </div> 
    </main>
</div>
    );
  }
}