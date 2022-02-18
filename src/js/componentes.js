//Después de hacer la configuracion de css se importa el archivo al cual se va aplicar
import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre}`;

    document.body.append(h1);
}