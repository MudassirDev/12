const CartProducts = {};
const Products = {
    "product-1": {
        img: "https://img.drz.lazcdn.com/static/pk/p/5f445af2f4d09bb4f30da71aa20b836d.png_400x400q80.png_.webp",
        name: "Wireless Earbuds Airpods M10 touch",
        price: 849,
    },
    "product-2": {
        img: "https://img.drz.lazcdn.com/static/pk/p/a1bbac41eab0fa2c0fd83893e783a5ee.jpg_400x400q80.jpg_.webp",
        name: "Wireless Headphones, P47 Bluetooth",
        price: 760,
    },
};

const allBtns = document.querySelectorAll(".add-to-cart-btn");

allBtns.forEach((btn) => {
    btn.addEventListener("click", addtocart);
});

function addtocart() {
    document.getElementById("detail").style.display = "";
    const id = this.parentElement.id;
    if (CartProducts[id] == undefined) {
        CartProducts[id] = {
            quantity: 1,
        };
    } else {
        CartProducts[id].quantity += 1;
    }
    renderProducts();
}

function renderProducts() {
    let totalItems = 0;
    let totalPrice = 0;
    const products = document.getElementById("detail").querySelector(".products");
    products.innerHTML = "";
    for (const id in CartProducts) {
        totalItems += 1;
        totalPrice += Products[id].price * CartProducts[id].quantity;
        products.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="display d-flex">
                        <div class="item-1 mt-5">
                            <img src="${Products[id].img}" class="w-25" alt="">
                            <h3 class="mt-3">${Products[id].name}</h3>
                            <h5 id="price-value">Rs. ${Products[id].price}</h5>
                        </div>
                        <div class="btn d-flex mt-5 h-25 ">
                            <h4> quantity</h4>
                            <button class="btn btn-danger h-25  mt-5" onclick="(()=>{decrement('${id}')})()" style="margin-right:10px">-</button>
                            <h3 class="mt-5" id="digit">${CartProducts[id].quantity}</h3>
                            <button class="btn btn-success h-25  mt-5" onclick="(()=>{increment('${id}')})()" style="margin-left: 10px;">+</button>
                        </div>
                    </div>`,
        );
        document.getElementById("item").innerHTML = totalItems;
        document.getElementById("tprice").innerHTML =
            `Rs. ${totalPrice.toLocaleString()}`;
    }
}

function increment(id) {
    console.log("increment");
    CartProducts[id].quantity += 1;
    renderProducts();
}
function decrement(id) {
    console.log("decrement");
    if (CartProducts[id].quantity > 1) {
        CartProducts[id].quantity -= 1;
        renderProducts();
    }
}

document.addEventListener("DOMContentLoaded", () => { });
