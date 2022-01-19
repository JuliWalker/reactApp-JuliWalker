import react, {useEffect, useState} from "react";


export default function TestPromesas(){

    useEffect(() => {    
        
        console.log('arranca aqui!');
        
        const promesaProductos = new Promise((resolve, reject)=>{
            
            // le pongo un retraso de 3 segundos al codigo adentro de la función TimeOut
            setTimeout(() => {
                // aca adentro resuelvo la promesa de forma default si no se resolvio 3 segundos antes.
                resolve(['marcos', 'juan', 'rodri']);
                // reject('servidor caido'); asi se pone el reject de la promesa (por ejemplo en un timeout)
            }, 3000);
        })

        // con esta linea  le aclaramos que el codigo de adentro se tiene que ejecutar despues de que se ejecute la promesa.
        promesaProductos.then((res)=>{
            // aca estoy estoy mostrando la respuesta de la promesa y ejecutando el codigo para luego de resolver la promesa.
            console.log(res); 
            console.log(promesaProductos);
        })
        .catch((err)=>{
            // aca estoy capturando el error y mostrando el console de la respuesta de la promesa
            console.log(err);
        })

        console.log(promesaProductos);

    });

    return(
        <>
       
        </>
    )

}
