function Carro(marca, nPuertas, data) {
    this.marca = marca;
    this.nPuertas = nPuertas;
    this.data = { 
        modelo: data.modelo,
        price: data.price,
    };

    this.printInfo = () =>{
        return `Marca: ${this.marca} / Numero de puertas: ${this.nPuertas} / Modelo: ${this.data.modelo} 
        / Precio: ${this.data.price}€`;
    }
}

let carros = [];
let arrayEjercicio;
let result;

for(let i = 0; i<document.forms.length; i++){
    let form = document.forms[i];
    console.log(document.forms);
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        switch(form.id){
            case "ejercicioSuma":
                try{
                    result = parseInt(form[0].value) + parseInt(form[1].value);
                    showResult(form, "Rseultado:");
                }
                catch{
                    console.log("Internal Error");
                }
            break;

            case "ejercicioParImpar":
                try{
                    if(form[0].value % 2 == 0){
                        result = `${form[0].value} es par`;
                    }
                    else{
                        result = `${form[0].value} es impar`;
                    }
                    showResult(form, "Rseultado:");
                }
                catch{
                    console.log("Internal Error");
                }
            break;

            case "ejercicioCrearCarro":
                console.log(form)
                try{
                    let dataObj = {
                        modelo: form[2].value,
                        price: form[3].value
                    }
                    carros.push(new Carro(form[0].value, form[1].value, dataObj))
                    result = carros[carros.length -1].printInfo();
                    showResult(form, "Carro creado:");
                }
                catch{
                    console.log("Empty data");
                }
            break;

            case "ejercicioMostrarCarro":
                try{
                    result = carros[form[0].value - 1].printInfo();
                    showResult(form, "Carro encontrado:");
                }
                catch{
                    console.log("Empty position");
                    form.nextElementSibling.innerHTML = `Carro no encontrado en la posición: ${form[0].value}`;
                } 
            break;

            case "ejercicioCrearArray":
                try{
                    arrayEjercicio = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
                    result = arrayEjercicio;
                    showResult(form, "Array credado:");
                }
                catch{
                    console.log("Internal Error");
                }
            break;

            case "ejercicioBorrarPares":
                try{
                    result = arrayEjercicio.filter(n => n % 2 !== 0);
                    showResult(form, "Array resultado:");
                }
                catch{
                    console.log("Array no Creado");
                    form.nextElementSibling.innerHTML = "Array no Creado";
                }
            break;
        }
    });
}

function showResult(element, string){
    element.nextElementSibling.innerHTML = `${string} ${result}`;
}