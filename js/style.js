//get function the phone plus button
function getPlusButton(prodect, boolen, price) {
    const phoneInput = document.getElementById(prodect + '-input');
    let phoneInputValue = phoneInput.value;
    if (boolen == true) {
        phoneInputValue = parseInt(phoneInputValue) + 1;
    }
    else if (phoneInputValue > 0) {
        phoneInputValue = parseInt(phoneInputValue) - 1;
    }
    phoneInput.value = phoneInputValue;
    const amount = document.getElementById(prodect + '-total');
    amount.innerText = phoneInputValue * price;
    getTotal()
}

function getConteiiner(prodect) {
    const phoneInput = document.getElementById(prodect + '-input');
    let phoneInputValue = phoneInput.value;
    let num = parseInt(phoneInputValue)
    return num;
}

function getTotal() {
    const phone = getConteiiner('phone') * 1219;
    const cas = getConteiiner('case') * 59;
    const subtotal = phone + cas;
    const tex = subtotal / 10;
    const total = subtotal + tex;
    //get subtotal
    document.getElementById('subTotal').innerText = subtotal;
    document.getElementById('tex').innerText = tex;
    document.getElementById('total').innerText = total;

}
//get event heandler the phone plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    getPlusButton('phone', true, 1219)
})
//get event heandler the phone minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    getPlusButton('phone', false, 1219)
})

//get event heandler the case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    getPlusButton('case', true, 59)
})

document.getElementById('case-minus').addEventListener('click', function () {
    getPlusButton('case', false, 59)
})


