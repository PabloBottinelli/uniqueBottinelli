Tienda Online Unique
Una tienda online donde las cosas que se venden son unicas
Presenta 5 categorias, 3D (cosas impresas en 3d), Joyas, Muebles, Artesanias y otros.
No presenta dependencias externas ademas de las trabajadas en clase

Para instalarlo debes ejecutar el comando 
$ npm i 
desde la carpeta unique

Tambien debes configurar tus credenciales de firestore creando un archivo .env como se muestra en el archivo de ejemplo .env.example

Las funcionalidades de este proyecto son:
- Un navbar que recibe las categorias desde la base de datos y las muestra, al hacerles click, gracias al routing, te muestra los productos de la categoria
clickeada
- Un cartWidget que se muestra solo si hay productos agregados, y muestra el numero de productos que hay en el carrito gracias al CartContext programado en app.js
- Una ruta principal donde se muestran todos los productos de la pagina a la cual se accede haciendo click en el logo
- Un ItemDetail que se muestra al clickear un producto y muestra mas datos sobre dicho producto y un ItemCount donde podes elegir la cantidad que queres y
agregarlo al carrito
- Dicho ItemCount desaparece al agregar productos al carrito, a su vez, si volves a ingresar al mismo producto que ya ingresaste, el ItemCount se 
mostrara con la cantidad de ese producto que tenes agregada, si cambias la cantidad, el CartWidget se actualizara debidamente sin perder consistencia
- Finalmente, un Cart donde podes visualizar los productos agregados, eliminar los que quieras, modificar las cantidades, vaciar el carrito, ver los subtotales y el total, y, por ultimo, completar los datos del usuario y finalizar la compra. Al realizar esta ultima accion se le mostrara al usuario la id
de su compra