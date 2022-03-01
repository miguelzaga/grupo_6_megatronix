window.addEventListener('load', function () {
    let tbody = document.querySelector(".tbody");
    let datos = JSON.parse(localStorage.getItem('datos'));
    datos.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
        <td><img src=${item.img} class="imgTable"></td>
        <td>${item.title}</td>
        <td>
            <input type="number" min="1" value=${item.cant} class="inputTable">
        </td>
        <td class="priceTable">${item.price}</td>
    `
        tr.innerHTML = content
        tbody.appendChild(tr)
    })
})
