
let cart = [];
let wishlist = [];

function addToCart(productId) {
    if (checkIfInCart(productId)) {
        alert('El producto ya está en el carrito');
        return;
    }else{
        cart.push(productId);
        alert('Producto agregado al carrito');
        localStorage.setItem('cart', JSON.stringify(cart));
        printCart();
    }
}

function addToWishlist(productId) {
    if (checkIfInWishlist(productId)) {
        alert('El producto ya está en la lista de deseos');
        return;
    }else{
        wishlist.push(productId);
        alert('Producto agregado a la lista de deseos');
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        printWishlist();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(id => id !== productId);
    alert('Producto removido del carrito');
    localStorage.setItem('cart', JSON.stringify(cart));
    printCart();
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    alert('Producto removido de la lista de deseos');
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    printWishlist();
}

function clearCart() {
    cart = [];
    alert('Carrito vaciado');
    localStorage.setItem('cart', JSON.stringify(cart));
    printCart();
}

function clearWishlist() {
    wishlist = [];
    alert('Lista de deseos vaciada');
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    printWishlist();
}

function checkIfInCart(productId) {
    return cart.includes(productId);
}

function checkIfInWishlist(productId) {
    return wishlist.includes(productId);
}

function printCart() {
    console.log('Carrito:', cart);
}

function printWishlist() {
    console.log('Lista de deseos:', wishlist);
}

function chooseImage(productId) {
    if (productId == '1') {
        return "../img/Alfombras-interiores/Alfombra-Abstracta.jpg"
    }
    else if(productId === '2'){
        return "../img/Alfombras-interiores/Alfombra-Arcoiris.jpg"
    }
    else if (productId === '3') {
        return "../img/Alfombras-interiores/Alfombra-de-Corazones.jpg"
    }
    else if (productId === '4') {
        return "../img/Alfombras-interiores/Alfombra-Hoja.jpg"
    }
    else if (productId === '5') {
        return "../img/Modelos-Abstractos/Alfombra-cherry.jpg"
    }
    else if (productId === '6') {
        return "../img/Modelos-Abstractos/Alfombra-Pelota-Basquet.jpg"
    }
    else if (productId === '7') {
        return "../img/Modelos-Abstractos/Alfombra-Perro.jpg"
    }
    else if (productId === '8') {
        return "../img/Alfombras-clientes/Alfombra-mamba_slow.jpg"
    }
    else if (productId === '9') {
        return "../img/Modelos-Abstractos/Alfombra-Corazon.jpg"
    }
    else{
        return "No hay alfombra con este id"
    }
}