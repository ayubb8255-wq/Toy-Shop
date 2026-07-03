let cart = [];

/* 🧸 TOY PRODUCTS */
let products = [
    {id:1, name:"Teddy Bear", price:10, img:"https://via.placeholder.com/150"},
    {id:2, name:"Robot Toy", price:15, img:"https://via.placeholder.com/150"},
    {id:3, name:"Toy Car", price:12, img:"https://via.placeholder.com/150"},
    {id:4, name:"Doll House", price:25, img:"https://via.placeholder.com/150"},
    {id:5, name:"Lego Set", price:20, img:"https://via.placeholder.com/150"},
];

function loadProducts(){
    let container = document.getElementById("productList");

    products.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

function addToCart(name, price){
    cart.push({name, price});
    document.getElementById("cartCount").innerText = cart.length;
}

loadProducts();