function getIdFun(idArr) { //getIdFun input Id name arry,return id batton array
    const idBtnArr = []
    for (const idName of idArr) {
        idBtnArr.push(document.getElementById(idName));
    }
    return idBtnArr;
}
const idBtn = getIdFun(["coupn-text", "copunApplyBtn", "purchasBtn",
    "cardPrice", "selectedTitle", "gotHome", "coupon-code", "coupnText2"]);
// button disable 
function buttonDisable(disBtnArr) {
    for (const disBtn of disBtnArr) {
        disBtn.setAttribute("disabled", "disabled");
    }
}
const disablBtns = getIdFun(["coupn-text", "copunApplyBtn", "purchasBtn",
    "cardPrice", "selectedTitle", "gotHome", "coupnText2"]);
buttonDisable(disablBtns); //disba function call

const couponCodeInput = idBtn[6];
const promoCode = "SELL200"; //this copun code "SEELL200"
const promoCodeBtns = [idBtn[0], idBtn[7]];
for (const promoCodeBtn of promoCodeBtns) {
    promoCodeBtn.innerText = promoCode;
    // code copy 
    promoCodeBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(promoCode)
        couponCodeInput.value = promoCodeBtn.innerText;
    })
}
/**
 * product section 
 */
const KitchenwareProductContainer = {
    "K. Accessories": 39.00,
    "K. Accessories ": 25.00,
    "Home Cooker": 49.00,
}
const SportswearProductContainer = {
    "Sports Back Cap": 49.00,
    "Full Jersey Set": 69.00,
    "Sports cates": 159.00,
}
const FurnitureProductContainer = {
    "Single Relax Chair": 185.00,
    "Children play": 299.00,
    "Flexible Sofa": 339.00,
}
//production seleted
const productGrups = document.getElementsByClassName("grupPdoducts");
const KitchenwareProduct = productGrups[0]
const SportswearProduct = productGrups[1]
const FurnitureProduct = productGrups[2]

function productSetGet(dom, obj) { //product set function      
    let i = 0;
    for (const productTitle in obj) {
        let produPrice = obj[productTitle];
        dom.children[i].children[1].children[1].innerText = productTitle;
        dom.children[i].children[1].children[2].innerText = produPrice.toFixed(2) + " TK";
        i++
    }
}
productSetGet(KitchenwareProduct, KitchenwareProductContainer); //product function call for Kitchenware
productSetGet(SportswearProduct, SportswearProductContainer); //product function call for Sportswear
productSetGet(FurnitureProduct, FurnitureProductContainer); //product function call for Furniture
// product sectio click
for (const iterator of productGrups) {
    for (const everyElement of iterator.children) {
        everyElement.setAttribute("onclick", "getClickElement(this)"); // getClickElement function 
    }
}
// getClickElement function
function getClickElement(element) {
    const clickProductTitle = []; //clicked title array return  
    const clickProductPrice = []; //clicked price array return
    clickProductTitle.push(element.children[1].children[1].innerText);
    clickProductPrice.push(element.children[1].children[2].innerText);
    selectedTitleFun(clickProductTitle); //selested function call
    totalPriceFun(clickProductPrice); //total price function call
    discountFun(); //discound functio call 
    totalFun(); //tatle function call 
}
// card siction show
let selectedTitle = idBtn[4];
// selected item title functio
function selectedTitleFun(titles) {
    if (titles.length > 0) {
        selectedTitle.classList.remove("hidden");
        let li = document.createElement("li");
        for (const title of titles) {
            li.innerText = title;
        }
        selectedTitle.appendChild(li);
    }
}
selectedTitle.innerHTML = ""; //selected item title show for
//Total price
let totalPrice = 0; //total main price
const totalPriceSelector = idBtn[3].children[0].children[0];
// total price functio
function totalPriceFun(priceList) {
    if (priceList.length > 0) {
        for (const priceSrt of priceList) {
            let price = parseFloat(priceSrt.split(" ")[0]);
            totalPrice += price
        }
    }
    totalPriceSelector.innerText = totalPrice.toFixed(2) + " TK"; //show after calculason
    if (totalPrice > 0) {
        idBtn[2].removeAttribute("disabled");
    }
}
totalPriceSelector.innerText = totalPrice.toFixed(2) + " TK"; //total price show
// Discount
let discount = 0; //discount main price 
const discountPirsent = 20;
const discountSelector = idBtn[3].children[1].children[0];
// Discount function 
function discountFun() {
    if (totalPrice >= 200) {
        const rmDisable = [idBtn[0], idBtn[1], idBtn[7]];
        for (const rmAtt of rmDisable) {
            rmAtt.removeAttribute("disabled");
        }

        idBtn[1].addEventListener("click", function() {
            if (promoCode === couponCodeInput.value) {
                discount = (discountPirsent / 100) * totalPrice
                //after calculason show.
                discountSelector.innerText = discount.toFixed(2) + " TK";
                totalFun(); //tatle function call 
                couponCodeInput.value = "";
            }
        })
    }
}
discountSelector.innerText = discount.toFixed(2) + " TK"; //discount show for
//total
let total = 0;
const totalSelector = idBtn[3].children[2].children[0];
// total functio
function totalFun() {
    let total = totalPrice - discount;
    totalSelector.innerText = total.toFixed(2) + " TK"; //show after calcution
}
totalSelector.innerText = total.toFixed(2) + " TK"; //total show for
//click button on model and refresh
idBtn[2].addEventListener("click", function() {
    idBtn[5].removeAttribute("disabled");
})
idBtn[5].addEventListener("click", function() {
    location.reload();

})