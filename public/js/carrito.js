const clickCarrito = document.querySelectorAll('#addCarrito');
let carrito = [];
const local = window.localStorage;

clickCarrito.forEach(boton =>{
    boton.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest("article");
    const itemImg = item.querySelector('.productImg').src;
    const itemTitle = item.querySelector('.nombre').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    
    const newItem = {
        title: itemTitle,
        price: itemPrice,
        img: itemImg,
        cant: 1
    }
    addItemCarrito(newItem)
}

function addItemCarrito(newItem) {
    carrito.push(newItem);
    localStorage.setItem('datos', JSON.stringify(carrito));
}
