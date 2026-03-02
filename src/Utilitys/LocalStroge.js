const getCart = () =>{
    const stroedCarts = localStorage.getItem("cart");
    if(stroedCarts){
        const stroedCartsParse = JSON.parse(stroedCarts)
        return stroedCartsParse
    }
    return [];
}



// save stringfiy;
const saveCart = (cart) =>{
    const addCartStringfiy = JSON.stringify(cart);
    localStorage.setItem("cart",addCartStringfiy);
}


// Add Item for localStroge;
const addCart = (id) =>{
    const carts = getCart();
    const newCarts = [...carts,id]
    saveCart(newCarts)
}



// Remove lg stroge code;
const removeCart = (id) =>{
    const storedCart = getCart();
    const remainingCart = storedCart.filter(storedId=>storedId !== id)
    // localStorage
    saveCart(remainingCart)
}
export {getCart,addCart,removeCart}