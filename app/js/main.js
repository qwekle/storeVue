// Переменная для включения и выключения функций обратного вызова
var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
    el: "#app",
    data: {
        sitename: "Vue.js Pet Depot",
        products: [],
        cart: [],
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            gift: 'Send As A Gift',
            sendGift: 'Send As A Gift',
            dontSendGift: 'Do Not Send As A Gift',
            method: 'Home Address',
            business: 'Business Address',
            home: 'Home Address',
        },
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
        }
    },
    filters: {
        // фильтр formatPrice() форматирует цену переданную в центах в строку вида: 12500 -> $12.50 или 2000000 -> $20,000.00
        formatPrice: function (price) {
            if (!parseInt(price)) {
                return "";
            }

            // если значение цены больше 1000 долларов или 100000 центов, то в этом случае представим цену в виде строки: 2000000 -> $20,000.00
            if (price > 99999) {
                // Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
                var priceString = (price / 100).toFixed(2); // 2000000 -> 20000.00
                var priceArray = priceString.split("").reverse(); // 20000.00 -> ["0", "0", ".", "0", "0", "0", "0", "2"]
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ","); // вставляем в массив priceArray новый элемент со значением ","
                    index += 4;
                }

                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    },
    methods: {
        addToCart: function (aProduct) {
            this.cart.push(aProduct.id);
            console.log(this.cart);
        },
        // используем сокращенный синтаксис объявления методов
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert("Submitted");
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0;
        },
        canAddToCart(aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }

            return count;
        }
    },
    computed: {
        cartItemCount: function () {
            return this.cart.length || "";
        },
        sortedProducts() {
            if (this.products.length > 0) {
                // преобразуем объект в массив с помощью стандартного метода slice()
                let productsArray = this.products.slice(0);
                function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }

                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }

                    return 0;
                }

                return productsArray.sort(compare);
            }
        }
    },
    beforeCreate: function () {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeCreate");
        }
    },
    created: function () {
        axios.get('./products.json')
            .then((response) => {
                this.products = response.data.products;
                console.log(this.products)
            })
    }
});