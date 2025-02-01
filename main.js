let shop = document.getElementById("shop");

let shoptItemsData = [{
    id : "222",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-1.jpg"
},{
    id : "223",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-2.jpg"
},{
    id : "224",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-3.jpg"
},{
    id : "225",
    name: "Suit",
    price: 400,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    img: "images/img-4.jpg"
}]

let basket = [];

console.log(shop);
let generateShop =()=>{
    return (shop.innerHTML = shoptItemsData.map((x)=> {
        return`
        <div id=product-id-${x.id} class="item">
        <img width="220" src="${x.img}" alt="">
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price-quantity">
                <h2>$ ${x.price}</h2>
                <div class="buttons">
                  
                   <i onclick="decreament(${x.id})" class="bi bi-dash-lg"></i>
                   <div id=${x.id} class="quantity">0</div>
                   <i onclick="increament(${x.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
       </div>
        `
    }).join(""));
};

generateShop();

let increament = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id : selectedItem,
            item:1,
        })
    }else {
        search.item += 1;
    }
   
    console.log(basket);
};
let decreament = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem);

    if (search === undefined || search.item === 0) {
       return;
    }else {
        search.item -= 1;
    }
   
    console.log(basket);
};
let update = () => {
    basket.pop();
};