
function getIdFun (Id) {
    // only id name 
  return document.getElementById(Id);
}
 
// button disable 
function buttonDisable (disBtn) {
    // only button input 
    disBtn.setAttribute("disabled", "disabled");
}

// button disable 
const idArr = ["coupn-text","copunApplyBtn","purchasBtn"];
//id all buttons
const buttonArr =[]

for (const idName of idArr) {
    buttonDisable(getIdFun(idName));
    buttonArr.push(getIdFun(idName))
    
}



const couponCode = getIdFun("coupon-code");


const promoCode = "SELL200"; //this copun code "SEELL200"

const promoCodeBtn = buttonArr[1];
promoCodeBtn.innerText = promoCode;

let totalProductPrice = 20;


if (200 < totalProductPrice ){
    promoCodeBtn.removeAttribute("disabled")
    
    promoCodeBtn.addEventListener("click",function(){
        navigator.clipboard.writeText(promoCode)
        couponCode.value = promoCode;
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



const productGrups = document.getElementsByClassName("grupPdoducts");
     
const KitchenwareProduct = productGrups[0]
const SportswearProduct = productGrups[1]
const FurnitureProduct = productGrups[2]



function productSetGet(dom, obj){        
            let i = 0;
    for (const productTitle in obj) {
        let produPrice = obj[productTitle];
        dom.children[i].children[1].children[1].innerText = productTitle;
        dom.children[i].children[1].children[2].innerText = produPrice.toFixed(2) + " TK";
        
        i++
    }
    
}


productSetGet(KitchenwareProduct,KitchenwareProductContainer);
productSetGet(SportswearProduct,SportswearProductContainer);
productSetGet(FurnitureProduct,FurnitureProductContainer);

   






for (const iterator of productGrups) {
     for (const everyElement of iterator.children) {
        everyElement.setAttribute("onclick", "getClickElement(this)");   
     }

    //     everyElement.addEventListener("click",clickedProdoct)
        
    //  }
    
}


function getClickElement(element){
    const clickProductTitle = [];
    const clickProductPrice = [];
    clickProductTitle.push(element.children[1].children[1].innerText);
    clickProductPrice.push(element.children[1].children[2].innerText);

    addToCard(clickProductTitle,clickProductPrice);
    discountfun();
    totalFun();
    
}

let total = 0;

let produTotalPrice = getIdFun("cardPrice").children[0].children[0];
produTotalPrice.innerText = total.toFixed(2) + " TK";

let selectedTitle = getIdFun("selectedTitle");

selectedTitle.innerHTML = "";

function addToCard (titleList,priceLest){
    if(priceLest.length > 0){
        for (const singlePrice of priceLest) {
           let productPrice = parseFloat(singlePrice.split(" ")[0]);
           total += productPrice
        }
    }
    produTotalPrice.innerText = total.toFixed(2) + " TK";

    if(titleList.length > 0){
        selectedTitle.classList.remove("hidden");
        let li = document.createElement("li");
        for (const selecedProdactName of titleList) {
            li.innerText = selecedProdactName;
            
        }


        selectedTitle.appendChild(li);
    }


    if(total > 0){
        getIdFun('purchasBtn').removeAttribute("disabled");
    }




    
}


/**
 * discound functonnalety 
 */
let inputCopon = getIdFun("coupon-code")  
const discountPirsent = 20;
let dicoundAmmount = 0;

getIdFun("cardPrice").children[1].children[0].innerText = dicoundAmmount.toFixed(2) + " TK";

function discountfun() {
    if(total >= 200){
        const idArr = ["coupn-text","copunApplyBtn",]
        getIdFun("coupn-text").removeAttribute("disabled");
        getIdFun("copunApplyBtn").removeAttribute("disabled");

        

        getIdFun("copunApplyBtn").addEventListener("click", function(){

           
            if(inputCopon.value === promoCode){
                dicoundAmmount = (discountPirsent/100) * total
                getIdFun("cardPrice").children[1].children[0].innerText = dicoundAmmount.toFixed(2) + " TK";
                chackOutTotal = total - dicoundAmmount;
                inputCopon.value = "";
                totalFun();
            }
        })


    }

};


function totalFun (){
    let chackOutTotal = total - dicoundAmmount;
getIdFun("cardPrice").children[2].children[0].innerText = chackOutTotal.toFixed(2) + " TK";
}












      
 

























// function clickedProdoct(e){
    
//     let clickProductTitle = null;
//     let clickProductPrice = null;


//     // const TagNameArr = ["FIGURE","DIV","INPUT","H2","P"]
//     const TagNameArr = ["H2","P"]
//     for (const clickTagName of TagNameArr) {
//         if (e.target.tagName === clickTagName){
            
//             clickProductTitle = e.target.parentElement.children[1].innerText;
//             clickProductPrice = e.target.parentElement.children[2].innerText;

//         }
//     }
//     if (e.target.tagName === "FIGURE"){
//         clickProductTitle = e.target.parentElement.children[1].children[1].innerText;
//         clickProductPrice = e.target.parentElement.children[1].children[2].innerText;
//     }

//     if (e.target.tagName === "DIV"){
        
//         const classListes = e.target.children[1].classList
//         for (const classNameSingl of classListes) {
//             if(classNameSingl === 'card-body'){
//                 clickProductTitle =  e.target.children[1].children[1].innerText;
//                 clickProductPrice = e.target.children[1].children[2].innerText;
//             }
//             if(classNameSingl === 'card-title'){
//                 clickProductTitle = e.target.children[1].innerText;
//                 clickProductPrice = e.target.children[2].innerText;
//             }
            
//         }
//     }

//     if(e.target.tagName === "IMG") {
//         clickProductTitle =  e.target.parentElement.parentElement.children[1].children[1].innerText;
//         clickProductPrice =  e.target.parentElement.parentElement.children[1].children[2].innerText;
//     }







//     console.log(clickProductPrice, clickProductTitle ,e.target.tagName);


// }
   
  