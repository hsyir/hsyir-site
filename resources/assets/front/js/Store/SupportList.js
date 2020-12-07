export default class SupportList {
    constructor() {
        this.cart = [];
        this.bussy =  false;
        this.cartUpdatedEvent = new CustomEvent("cart-update");
    }

    updateCart(cart) {
        this.items = cart.items;
        this.countItems = cart.count;
        this.sub_total = cart.sub_total;

    }

    cartBussy() {
        this.bussy = true;
    }

    cartIdle() {
        this.bussy = false;
    }

    cartIsBussy() {
        return this.bussy;
    }

    getCart() {
        return this.items;
    }

    count() {
        return this.countItems;
    }

    addItem(productVarietyId, quantity = 1) {
        var c = this;

        return new Promise((resolve, reject) => {
            if (c.cartIsBussy())
            {
                console.log("bussy")
                reject();
            }

            console.log("start")
            this.cartBussy();
            axios.post("/supportList/add", {product_variety_id: productVarietyId, quantity: quantity})
                .then(function (respond) {
                    c.updateCart(respond.data.cart);
                    document.body.dispatchEvent(c.cartUpdatedEvent);
                    c.cartIdle();
                    resolve();
                });
        });
    }

}
