
function changeRed() {
    document.getElementById("logo-img").src = "./images/color-red.png";
    unlockStoragePanel();
}
function changeBlue() {
    document.getElementById("logo-img").src = "./images/color-blue.png";
    unlockStoragePanel();
}
function changeGrey() {
    document.getElementById("logo-img").src = "./images/color-grey.png";
    unlockStoragePanel();
}

const basePrice = 299;
const warranty = 99;
let total = basePrice;
function add64GB() {
    total = basePrice;
    unlockWarrantyAndBilling()
    updateTotal(total);
}
function add256GB() {
    const upgradeCost = 99.99;
    total = basePrice + upgradeCost;
    unlockWarrantyAndBilling()
    updateTotal(total);
}

function add512GB() {
    const upgradeCost = 169.99;
    total = basePrice + upgradeCost;
    unlockWarrantyAndBilling()
    updateTotal(total);
}

function addWarranty(){
    const checkBox = document.getElementById("warranty-sub");

    if (checkBox.checked == true){
        total += warranty;
    }
    else {
        total -= warranty;
    } 
    updateTotal(total);
}

function updateTotal(total) {
    document.getElementById("total-price").innerText = `$ ${total}`;
}

function unlockWarrantyAndBilling() {
    document.getElementById("warranty").scrollIntoView();
    document.getElementById("warranty").style.opacity = "1";
    document.getElementById("warranty").style.pointerEvents = "auto";

    document.getElementById("totals").style.display = "block";
    document.getElementById("totals").style.pointerEvents = "auto";

    document.getElementById("billing").style.display = "block"
    document.getElementById("billing").style.pointerEvents = "auto";
}

function unlockStoragePanel() {
    document.getElementById("storage-options").scrollIntoView();
    document.getElementById("storage-options").style.opacity = "1";
    document.getElementById("storage-options").style.pointerEvents = "auto";
}

//Format Card Number 
const cardElement = document.getElementById('ccard');
cardElement.addEventListener("input", () => {
    let cardInfo = cardElement.value;
    if(cardInfo.match(/\D/g)) {
        cardElement.value = cardInfo.slice(0, cardInfo.length - 1);
    }
})

//Format Expiry Date
const expireDate = document.getElementById('expiry');
expireDate.addEventListener("input", () => {
    let  cardDate = expireDate.value;
    if(cardDate.match(/[a-z]/g)) {
        expireDate.value = cardDate.slice(0, cardDate.length - 1);
    }
})

//Format Security Code
const securityCode = document.getElementById('code');
securityCode.addEventListener("input", () => {
    let  cardCode = securityCode.value;
    if(cardCode.match(/[a-z]/g)) {
        securityCode.value = cardCode.slice(0, cardCode.length - 1);
    }
})