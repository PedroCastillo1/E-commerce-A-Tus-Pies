function deleteRow(button) {
    // Obtener la fila del botón
    var row = button.parentNode.parentNode;
    // Eliminar la fila de la tabla
    row.parentNode.removeChild(row);
}

function buyItem(button) {
    // Mostrar una alerta de compra
    alert("¡Gracias por tu compra!");
}
