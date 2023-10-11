function showFrom(){
    const overlay = document.getElementById('overlay')
    const form = document.getElementById('form')
    const close = document.getElementById('closeBtn')
    const account = document.getElementById('account')

    account.addEventListener('click',() => {
        overlay.style.display = 'block'
        form.style.display = 'block'
    })
    close.addEventListener('click',() => {
        overlay.style.display = 'none'
        form.style.display = 'none'
    })
    overlay.addEventListener('click',() => {
        overlay.style.display = 'none'
        form.style.display = 'none'
    })
}   
showFrom()



// Lấy tham số truy vấn từ URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');

// Hiển thị thông tin sản phẩm trên trang
const productImageElement = document.getElementById('product-image');
const productNameElement = document.getElementById('product-name');
const productPriceElement = document.getElementById('product-price');

productImageElement.src = productImage;
productNameElement.textContent = productName;
productPriceElement.textContent = `$${productPrice}`;