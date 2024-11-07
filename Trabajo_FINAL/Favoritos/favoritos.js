function deleteRow(button) {
    // Obtener la fila del botón
    var row = button.parentNode.parentNode;
    // Eliminar la fila de la tabla
    row.parentNode.removeChild(row);
}
