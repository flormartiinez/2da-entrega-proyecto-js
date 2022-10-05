document.body.onload=function(){
    mostrarCarro()
}

function mostrarCarro(){
    let carro=document.createElement("table")
    carro.setAttribute("class", "table")
    const items=JSON.parse(localStorage.getItem("Carro"))
    carro.innerHTML+=`<tr><th>ID</th><th>DESCRIPCION</th><th>PRECIO</th><th>CANTIDAD</th><th>SUBTOTAL</th></tr>`
    let totalCompra=0
    for (item of items) {
        let subtotal=item.producto.precio*item.cantidad
        carro.innerHTML+=`<tr><td> ${item.producto.id}</td><td> ${item.producto.descripcion}</td><td>${item.producto.precio}</td><td>${item.cantidad}</td><td>${subtotal}</td></tr>` 
        totalCompra=totalCompra+subtotal
    }
    carro.innerHTML+=`<tr><td colspan='4'> TOTAL:</td> <td>${totalCompra}</td></tr>` 
    document.body.appendChild(carro)
    let btnComprar=document.createElement("button")
    btnComprar.innerHTML="Comprar"
    btnComprar.setAttribute("Class","btn btn-success")
    btnComprar.setAttribute("Id","btnComprar")
    document.body.appendChild(btnComprar)
    btnComprar.onclick= function () {
        localStorage.removeItem("Carro")
        window.location.href = "index.html";
    }
}



