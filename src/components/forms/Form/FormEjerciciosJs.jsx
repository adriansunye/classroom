import React, {useState} from 'react';
import ButtonSubmit from '@components/buttons/BtnSubmit';

const FormEjerciciosJs = (props) => {
console.log(props.index);
  const renderCurrentForm = () => {
    switch (props.index) {
        case "ejercicioSuma":
            return <><div className="row mb-3">
            <div className="col-md-6">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" >Sumando 1</label>
                </div>
                <input className="form-control input-data" onChange={handleSumando1} min='0' type="number"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelectMarca">Sumando 2</label>
                </div>
                <input className="form-control input-data" min='0' type="number" onChange={handleSumando2}/>
            </div>
        </div>
        </div>
        <button type ="submit" className="btn btn-success">Suma</button>
        <p id="suma">Resultado:</p>
        </>
        case "ejercicioParImpar":
            return <><div className="row mb-3">
            <div className="col-md-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectMarca">Numero</label>
                            </div>
                            <input className="form-control input-data" min='0' type="number" value="1"/>
                        </div>
                    </div>
            </div>
            <button type ="submit" className="btn btn-success">Par o Impar</button>
            <p>Resultado:</p>
            </>;
        case "ejercicioCrearCarro":
          return <>
          <div className="row mb-3">
          <div className="col-md-6">
                        <div className="input-group mb-3">
                            <label className="input-group-text" for="inputGroupSelectMarca">Marca</label>
                            <select className="form-select" id="inputGroupSelectMarca">
                                <option value="Audi">Audi</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Seat">Seat</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="input-group mb-3 w-100">
                            <label className="input-group-text" for="inputGroupSelectPuertas">Nº Puertas</label>   
                            <select className="form-select" id="inputGroupSelectPuertas">
                                <option value="2">2 Puertas</option>
                                <option value="4">4 Puertas</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="row mb-3">
                    <div className="col-md-6">
                    <div className="input-group mb-3">
                      <label className="input-group-text" for="inputGroupSelectModel">Modelo</label>
                      <select className="form-select" id="inputGroupSelectModel">
                          <option value="New">New</option>
                          <option value="Old">Old</option>
                      </select>
                    </div>
                  </div>
                
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-2">
                        <label for="rangePrecio" class="form-label">Precio</label>
                      </div>
                      <div className="col-lg-10">
                        <input type = "range" class = "form-range" min="25000" max="70000" step="5000" id="renagePrecio"/>  
                      </div>
                    </div>
                  </div>
                  </div>
                  <button type ="submit" className="btn btn-success">CrearCarro</button>
            <p>Carro creado</p>
          </>;
        case "ejercicioMostrarCarro":
            return  <><div className="row mb-3">
            <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelectMarca">Posición</label>
                            </div>
                            <input className="form-control input-data" min='1' type="number" value="1"/>
                        </div>
                    </div>
            </div>
            <button type ="submit" className="btn btn-success">EncontrarCarro</button>
            <p>Carro encontrado: </p>
            </>
        case "ejercicioCrearArray":
            return <>
            <button type ="submit" className="btn btn-success">CrearArray</button>
            <p>Array creado: </p></>;
        case "ejercicioBorrarPares":
            return <>
            <button type ="submit" className="btn btn-success">BorrarPares</button>
            <p>Array resultante: </p></>;
        default:
            return null;
    }
};

const [sumando1, setSumando1] = useState('');
const [sumando2, setSumando2] = useState('');

  const handleSumando1 = (event) => {
    setSumando1(event.target.value);
  };

  const handleSumando2 = (event) => {
    setSumando2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  const result = parseInt(sumando1) + parseInt(sumando2);
  document.getElementById('suma').innerHTML = result;
}


    return (
      <form id={props.index} onSubmit={handleSubmit}>
          {renderCurrentForm()}
      </form>
    );
  };

export default FormEjerciciosJs;