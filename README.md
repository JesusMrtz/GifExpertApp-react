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

### Crear ambiente de pruebas para un proyecto React hecho con vite
> Si creamos el proyecto con la ayuda de *vite* se tiene instalar el paquete de [Jest](https://jestjs.io/) con el siguiente comando `npm install --dev jest @types/jest` y para la configuración se debe ejecutar el comando `npm install --save-dev babel-jest @babel/core @babel/preset-env`
> Se necesitará configurar el archivo `babel.config.cjs`
> Actualmente Jest no es bueno trabajando con el DOM, por lo cual se necesita el test-library para react. Se puede descargar con el siguiente comando `npm install --save-dev @testing-library/react jest-environment-jsdom`.
> **NOTA:** Si estas trabajando con una versión de node inferior a la 18.0.0, necesitarás configurar el archivo `jest.config.cjs` y agregar el paquete `whatwg-fetch` para aceptar las pruebas en funciones *async*
