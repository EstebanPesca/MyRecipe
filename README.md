# MyRecipe

El proyecto My Recipe, es una pagina web enfocada a recetas de cocina, en este proyecto se ven 2 tipos de catalogos, uno en con catas, y otro en forma de carousel, las 2 pantallas cuentan con imagenes, descripciones y un boton para redirigir a una tercera pantalla, la cual da mas informacion de la receta.

Las herramientas esenciales para porder leer el codigo serian un editor de codigo (Sublime, Visual Studio Code, Atom, etc...), en mi caso, use el editor de codigo de visual studio code.

En la consola de comando comence installando el framework: Angular(v:16.1.4); desarrolle sus componentes en varios puntos. Estan las views la cuales son las vistas que vera el usuario (catalogos y drescripcion), y estan los templates, las cuales son las plantillas que se reutilizaran en todo momento (header y footer). De igual forma se creo un servicio en el cual se usan las estructuras creadas por el desarrollador (estructuras que se encuentran en la carpeta interface) en la cuales se utilizan para el recepcion y envio de datos. En la carpeta constants se encuentra el archivo data el cual contiene todos los datos de las recetas.

Posteriormente se uso capacitor(v: 8.3.1) para la elaboracion de la aplicacion movil, de igual forma se intento con Cordova, pero esta presento algunos problemas, entonces se decidio en el uso de capacitor. De igual forma, la apk se encuentra en la direccion: 'MyRecipe\android\app\build\outputs\apk\debug', alli se encontrar la apk del proyecto.

Para terminar se uso firebase como hosting, la pagina se encuentra como: 'https://my-recipe-11a44.web.app/catalog'.