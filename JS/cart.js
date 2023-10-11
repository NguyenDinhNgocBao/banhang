
const cartBtn = document.getElementById('cartbtn');
const overlay = document.getElementById('overlay')
const close = document.getElementById('closeBtnCart')
const clear = document.getElementById('btn-clearAll');
const menu = document.getElementById('list-cart');
    cartBtn.addEventListener('click', function(){
        menu.classList.toggle('display');
        overlay.style.display = 'block';
    })
    overlay.addEventListener('click', function(){
        menu.classList.toggle('display');
    }) 
    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        menu.classList.toggle('display');
    })

function number(){
    const number = document.createElement('div');
}




if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", Run);
}else{
    Run();
}


// Hàm để lưu giỏ hàng vào Local Storage
function saveCartToLocalStorage(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Hàm để tải giỏ hàng từ Local Storage
function loadCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    return cart;
}



function Run(){
    const addToCartBTN = document.getElementsByClassName("add-to-cart");
    console.log(addToCartBTN.length);
    for(let i = 0; i < addToCartBTN.length; i++) {
        const buttonAdd = addToCartBTN[i];
        console.log(buttonAdd);
        buttonAdd.addEventListener("click", (e) =>{
            const button = e.target;
            const gameItem = button.parentElement.parentElement;
            const title = gameItem.getElementsByClassName("title")[0].innerText;
            const img = gameItem.getElementsByClassName("img")[0].src;
            const price = gameItem.getElementsByClassName("price")[0].innerText;
            addItemToCart(img, title, price);
            updateTotalPrice()
        })
    }
}

function updateTotalPrice() {
    const cartItems = document.getElementsByClassName("list-cart-main-item");
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const itemPrice = parseFloat(item.querySelector(".list-cart-main-item-price p").innerText.replace('$', ''));
        const itemQuantity = parseInt(item.querySelector(".list-cart-main-item-quantity input").value);
        totalPrice += itemPrice * itemQuantity;
    }

    // Hiển thị tổng giá trị lên phần tử có id "total-cart"
    const totalCartElement = document.getElementById("total-cart");
    totalCartElement.innerText = `$${totalPrice.toFixed(2)}`;
    console.log(totalPrice);
}

function addItemToCart(img, title, price){
    const itemGame = document.createElement("div");
    const listItem = document.getElementById("list-cart-main");
    console.log(listItem);
    const content = `
    <div class="list-cart-main-item">
        <img width="50" height="50" src="${img}" alt="">
        <div class="list-cart-main-item-dec">
            <h3>${title}</h3>
            <p>Size: L</p>
        </div>
        <div class="list-cart-main-item-price">
                        <p>${price}</p>
                    </div>
        <div class="list-cart-main-item-quantity">
            <button class="btnMinus">-</button>
            <input class="input" type="number" value="1">
            <button class="btnPlus">+</button>
        </div>
        <div class="list-cart-main-item-delete">
            <i class="deleteBtn fa-solid fa-trash"></i>
        </div>
    </div>
    `
    itemGame.innerHTML = content;
    listItem.append(itemGame);

    Quantity()
    DeleteItem();
}

function Quantity() {
    const btnMinus = document.querySelectorAll('.btnMinus');
    const btnPlus = document.querySelectorAll('.btnPlus');
    const inputValues = document.querySelectorAll('.input');


    // Lặp qua tất cả nút "-" (giảm số lượng)
    btnMinus.forEach((button, index) => {
        button.addEventListener("click", function() {
            const currentValue = parseInt(inputValues[index].value);
            if (currentValue > 1) { // Đảm bảo số lượng không nhỏ hơn 1
                inputValues[index].value = currentValue - 1;
                updateTotalPrice();
            }
        });
    });

    // Lặp qua tất cả nút "+" (tăng số lượng)
    btnPlus.forEach((button, index) => {
        button.addEventListener("click", function() {
            const currentValue = parseInt(inputValues[index].value);
            inputValues[index].value = currentValue + 1;
            updateTotalPrice();
        });
    });
    
}

function DeleteItem(){
    var removeCart = document.getElementsByClassName("deleteBtn");
    console.log(removeCart);
    const cartItem = document.getElementsByClassName("list-cart-main-item")
    const quantity = document.getElementById("quantity-current")
    console.log(quantity);
    const number = document.getElementById("number-current")
    quantity.innerText = cartItem.length; 
    number.innerText = cartItem.length;  
    for(let i = 0; i < removeCart.length; i++){
        const buttonX = removeCart[i];
        buttonX.addEventListener("click", function Delete(e){
            var clickCurrent = e.target;
            clickCurrent.parentElement.parentElement.remove();
            quantity.innerText = cartItem.length;   
            number.innerText = cartItem.length;
            updateTotalPrice()
        });
    }
}





