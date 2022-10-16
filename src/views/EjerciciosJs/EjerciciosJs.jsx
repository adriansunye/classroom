import React, { useState } from 'react';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

import Section from '@components/layout/organization/Section/Section';

import { EjerciciosJSActivities } from '@store/objects/EjerciciosJSActivities';

const EjerciciosJs = () => {
    const [ejercicios, setEjercicios] = useState([
        {
            id: "ejercicioSuma",
            title: '1. Crear función que reciba como parámetros dos números y que devuelva la suma de ellos.',
            answer: '',
            link: '',
            link_text: '' 
        },
        {
            id: "ejercicioParImpar",
            title: '2. Crear función que determine si un número es par o impar.',
            anwser: '',
            link: '',
            link_text: ''
        },
        {
            id: "ejercicioCrearCarro",
            title: '3. Crear un objeto carro. Introduce marca, numero de puertas, modelo y precio. ',
            answer: '',
            link: '',
            link_text: '' 
        },
        {
            id: "ejercicioMostrarCarro",
            title: '4. Crear una función que devuelva la información del carro en la posición: ',
            answer: '',
            link: '',
            link_text: '' 
        },
        {
            id:"ejercicioCrearArray",
            title: '5. Crear un array de 10 números',
            answer: '',
            link: '',
            link_text: '' 
        },
        {
            id:"ejercicioBorrarPares",
            title: '6. Crear una función que elimine los números pares de ese array.',
            answer: '',
            link: '',
            link_text: '' 
        }
    ]);
    
    return (
        <>
            <NavBar/>
            <main role="main" className="container" id="content">
                {ejercicios.map((ejercicio) => (
                    <Section data={ejercicio} />
                ))}
            </main>
        </>
    );
}

export default EjerciciosJs;