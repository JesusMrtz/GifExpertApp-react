# GifExpertApp
> Aplicación para encontrar imagenes GIF hecha con [ReactJs](https://es.reactjs.org/) y [vite](https://vitejs.dev/)
>
> Para utilizar esta aplicación se necesita una cuenta de [GIPHY](https://developers.giphy.com/) para obtener una *API KEY*


## Modo de uso
* Debes de tener una versión de `node` mayor o igual a 18.12.1
* Instalar las dependencias con el comando `npm install`
* Renombrar el archivo `.env.example` a `.env`
* Obtener una *API KEY* de [GIPHY](https://developers.giphy.com/) y ponerla en la variable *GIPHY_APY_KEY* dentro del nuevo archivo `.env`
* Ejecutar el comando `npm run dev` para iniciar el proyecto en el localhost

## Compilar el proyecto a modo PRODUCCIÓN
* Se tiene que ejecutar el comando `npm run build` para crear el dist para producción


## Notas del desarrollador

Nunca debemos colocar la ejecución de una funcion directamente en un functional component porque cada vez que se renderice ese componente, se volverá a ejecutar la función.

### useEffect
Cuando un componente sufre algún cambio, este se vuelve a renderizar ejecutando todo el código que tiene en su interior, pero hay veces que no queremos que se ejecute cierta parte del código nuevamente como por ejemplo una función que llama a una API y para eso se utiliza el useEffect

El useEffect sirve para disparar ejectos secundarios, como algún proceso cuando algo suceda 

El useEffect no puede ser asincrono

### StrictMode
Ayuda principalmente a identificar problemas en los componentes con sus cliclos de vida, muestrar advertencias si estamos utilizando algún código legacy

> El StricMode solo se aplica en modo desarrollador

### Compilar el build de producción
Se ejectuta el siguiente código `npm run build`