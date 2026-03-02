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
export {getCart,addCart}