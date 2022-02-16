const Item = function (Item) {
    switch(Item.name){
        case "SANITIZER":
            this.name = 'Sanitizer'
            this.price = 250
            this.quantity = Item.quantity
            break

        case "NOTEBOOK":
            this.name = 'Notebook'
            this.price = 100
            this.quantity = Item.quantity
            break

        case "BAG": 
            this.name = 'Bag'
            this.price = 1500
            this.quantity = Item.quantity
            break

    }
 
};

Item.calculateTotal = (details, result) => {

    const sanitizer = details.sanitizer;
    const notebook = details.notebook;
    const bag  = details.bag;
    total_price = sanitizers = notebooks = bags = 0;
    receipt_notebook = receipt_sanitizer = receipt_bag = receipt_promo_code = 0;

    if(sanitizer > 0) {
        sanitizers = new Item({name:'SANITIZER', quantity:sanitizer})
        total_price += sanitizers.quantity * sanitizers.price

    }
    if(notebook > 0) {
        notebooks = new Item({name:"NOTEBOOK", quantity:notebook})
        total_price += notebooks.quantity * notebooks.price
    }
    if(bag > 0) {
        bags = new Item({name:"BAG", quantity:bag})
        total_price += bags.quantity * bags.price
    }

    orginal_price = total_price;


    if(notebooks.quantity >=3 && total_price >= 500 && total_price * 0.10 <= 60 && notebooks){
        total_price = total_price - (total_price * 0.10);
        receipt_notebook = `After 10% discount for notebook price = ${total_price}`
    }
    if(sanitizers.quantity >= 10 && total_price > 3000 && sanitizers){
        total_price = total_price - 100;
        receipt_sanitizer = `After flat 100 rupees off  price = ${total_price}`

    }
    if(bags.quantity > 2 ){
        old_price = total_price
        total_price -= bags.quantity * bags.price
        total_price += 2 * bags.price
        receipt_bag = `Limited to 2 bags (-${old_price - total_price} for ${bags.quantity - 2}) price = ${total_price}`
        bags.quantity = 2
    }
        
    if(total_price > 10000){
        total_price = total_price - 123;
        receipt_promo_code = `Applied PRIME 123 promo code price = ${total_price}`
    }
    let receipt = {
        orginal_price,
        logs:[
            receipt_notebook ? receipt_notebook : "No offers added for notebooks",
            receipt_sanitizer ? receipt_sanitizer : "No flat discount for sanitizer",
            receipt_bag ? receipt_bag : 'Below 2 bags no price change',
            receipt_promo_code ? receipt_promo_code : 'PRIME 123 not applied',
        ],
        final_price: total_price
    };
    result(null, receipt)
}

module.exports = Item