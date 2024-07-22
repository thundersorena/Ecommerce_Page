const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(itme => itme.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false
    }else {
        return state.selectedItems[index].quantity;
    }
}

const sumItems = items => {
    const itemCounter = items.reduce((total, product) => total + product.quantity, 0)
    let total = items.reduce((total, product) => total+product.price * product.quantity, 0).toFixed(2);
    return {itemCounter: itemCounter, total:total}
}


export {shorten, isInCart, quantityCount, sumItems};