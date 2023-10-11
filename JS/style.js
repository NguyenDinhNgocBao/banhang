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