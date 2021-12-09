const products = [
    {
      id:'1',
      name:'Yoda 3D',
      descriptionSimple:'Figura 3D',
      description: 'Figura Impresa en 3D del personaje de star wars Yoda',
      precio: 250,
      url: './assets/3d1.jpg',
      categoryID: '4'
    },
    {
      id:'2',
      name:'Soporte de barbijos',
      descriptionSimple:'Soporte 3D',
      description: 'Soporte para barbijos con forma de flecha, color rojo e impreso en 3D',
      precio: 200,
      url: './assets/3D2.jpg',
      categoryID: '4'
    },
    {
      id:'3',
      name:'Balde 3D',
      descriptionSimple:'Balde 3D',
      description: 'Balde contenedor impreso en 3D color gris con detalles en rojo',
      precio: 300,
      url: './assets/3D3.jpg',
      categoryID: '4'
    },
    {
      id:'4',
      name:'Muñecas Mexicanas',
      descriptionSimple:'Muñecas artesanales',
      description: 'Muñecas mexicanas artesanales a pedido hechas a mano',
      precio: 250,
      url: './assets/artesanias1.jpg',
      categoryID: '1'
    },
    {
      id:'5',
      name:'Pulseras',
      descriptionSimple:'Pulseras Artesanales',
      description: 'Pulseras artesanales de colores a eleccion hechas a mano',
      precio: 100,
      url: './assets/artesanias2.jpg',
      categoryID: '1'
    },
    {
      id:'6',
      name:'Maceta',
      descriptionSimple:'Maceta artesanal',
      description: 'Macetas artesanales de todo color y tamaño, pintadas a mano',
      precio: 200,
      url: './assets/artesanias3.jpg',
      categoryID: '1'
    },
    {
      id:'7',
      name:'Anillos y Aritos',
      descriptionSimple:'Anillos y aritos varios',
      description: 'Anillos y Aritos con piedras de colores',
      precio: 500,
      url: './assets/joyas1.jpg',
      categoryID: '2'
    },
    {
      id:'8',
      name:'Collar, aritos y anillos',
      descriptionSimple:'Color plateado',
      description: 'Combo collar, aritos y anillos de color plateado',
      precio: 1000,
      url: './assets/joyas2.jpg',
      categoryID: '2'
    },
    {
      id:'9',
      name:'Pulseras y anillos',
      descriptionSimple:'Combo pulseras y anillos',
      description: 'Combo pulsera con piedra color verde agua y anillos plateados',
      precio: 1200,
      url: './assets/joyas3.jpg',
      categoryID: '2'
    },
    {
      id:'10',
      name:'Cajonera',
      descriptionSimple:'Diseño fantastico',
      description: 'Cajonera hecha a mano con diseño de fantasia, luces incluidas',
      precio: 3000,
      url: './assets/muebles1.jpg',
      categoryID: '3'
    },
    {
      id:'11',
      name:'Biblioteca',
      descriptionSimple:'Biblioteca minimalista',
      description: 'Biblioteca minimalista con huecos de diferentes tamaños color negro y gris',
      precio: 2000,
      url: './assets/muebles2.jpg',
      categoryID: '3'
    },
    {
      id:'12',
      name:'Mueble de cocina',
      descriptionSimple:'Mueble de madera',
      description: 'Mueble de cocina de madera con espacio para microondas',
      precio: 5000,
      url: './assets/muebles3.jpg',
      categoryID: '3'
    },
    {
      id:'13',
      name:'Portavela',
      descriptionSimple:'Antiguo',
      description: 'Portavela antiguo, diseño unico',
      precio: 600,
      url: './assets/otro1.jpg',
      categoryID: '5'
    },
    {
      id:'14',
      name:'Estatua',
      descriptionSimple:'Estatua Budista',
      description: 'Estatua Budista de bronze, altura 40cm',
      precio: 1200,
      url: './assets/otro2.jpg',
      categoryID: '5'
    },
    {
      id:'15',
      name:'Proyector',
      descriptionSimple:'Proyector de luces',
      description: 'Proyector de estrellas y luces de galaxia para niños',
      precio: 2200,
      url: './assets/otro3.jpg',
      categoryID: '5'
    }
]

// const categories = [
//     {id:'celular',description:'Celular'},
//     {id:'tablet',description:'Tablet'},
//     {id:'notebook',description:'Notebook'}
// ]

// export const getCategories = () => {    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(categories)
//         }, 5000)        
//     })
// }

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

// export const getItem = () => {    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products[0])
//         }, 3000)        
//     })
// }