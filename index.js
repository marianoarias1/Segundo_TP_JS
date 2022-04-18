const Pizzas = [
    {
        id: 1,
        nombre: "Especial",
        ingredientes: ["morron", "jamon", "queso", "aceitunas", "salsa"],
        precio: 600
    },

    {
        id:2,
        nombre: "Muzzarella",
        ingredientes: ["queso muzzarella", "oregano", "aceitunas",],
        precio: 450
    },

    {
        id:3,
        nombre: "Calabresa",
        ingredientes: ["pimineta", "oregano", "aceitunas", "queso", "calabresa en rodajas","salsa"],
        precio: 500
    },

    {
        id:4,
        nombre: "Albahaca",
        ingredientes: ["jamon", "queso","tomate","albahaca","salsa"],
        precio: 350
    },

    {
        id:5,
        nombre: "Jamon Crudo",
        ingredientes:["queso","jamon crudo","aceitunas","salsa"],
        precio: 600
    },

    {
        id:6,
        nombre: "4 quesos",
        ingredientes: ["queso muzzarella","queso roquefort","queso cremoso","queso parmesano","aceitunas"],
        precio:350
    }
    
]


const Impares = Pizzas.filter(Pizzas=>Pizzas.id %2!=0).map(Pizzas=>Pizzas.nombre + " ")

alert(`Las Pizzas con id impares son: ${Impares}`)

const pizzaMenor600= Pizzas.filter(Pizzas=>Pizzas.precio<600).map(Pizzas=>Pizzas.nombre + " ")

alert(`Las Pizzas con un valor menor a $600 son: ${pizzaMenor600}`)

const nombrePizzas= Pizzas.map(Pizzas=>Pizzas.nombre+ " ")
alert(`Los nombres de todas las pizzas disponibles son: ${nombrePizzas}`)

const precioPizzas= Pizzas.map(Pizzas=>"$" + Pizzas.precio +" ")
alert(`Los precios de todas las pizzas disponibles son: ${precioPizzas}`)

const nombrePrecio = Pizzas.map(Pizzas=>Pizzas.nombre + " " + "$" + Pizzas.precio)
alert(`Los nombres de cada pizza con sus precios son: ${nombrePrecio}`)