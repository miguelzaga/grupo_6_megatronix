window.addEventListener('load', function () {
    let tbody = document.querySelector(".tbody");
    let total = document.querySelector(".precioTotal")
    let datos = JSON.parse(localStorage.getItem('datos'));
    datos.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const precio = Number(item.price.replace("$", ''))
        let totalItem = precio * item.cant;
        const content = `
        <td><img src=${item.img} class="imgTable"></td>
        <td>${item.title}</td>
        <td>
            <input type="number" min="1" value=${item.cant} class="inputTable">
        </td>
        <td class="priceTable">$ ${totalItem}<i class="fas fa-times-circle" id="remover"></i></td>
        
    `
        tr.innerHTML = content
        tbody.appendChild(tr)
    })
    let valorTotal = 0;
    datos.map(item => {
        const precio = Number(item.price.replace("$", ''))
        valorTotal = valorTotal + precio * item.cant;
    })
    total.innerHTML = '$ ' + valorTotal

    const clickRemove = document.querySelectorAll('#remover');
    clickRemove.forEach(boton => {
        boton.addEventListener('click', function(){
            localStorage.removeItem('datos');
            location.reload();
        })
    })
})

