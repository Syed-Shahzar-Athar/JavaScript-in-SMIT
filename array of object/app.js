let latestMobilePhones = [
    {
        brand: "Apple",
        model: "iPhone 13 Pro",
        displaySize: "6.1 inches",
        color: "Graphite",
        img: "./images/apple-iphone-13-pro.jpg",
        details: "https://www.gsmarena.com/apple_iphone_13_pro-11102.php",
        pricePKR: 264900
    },
    {
        brand: "Samsung",
        model: "Galaxy S22 Ultra",
        displaySize: "6.8 inches",
        color: "Burgandy",
        img: "./images/samsung-galaxy-s22-ultra-5g.jpg",
        details: "https://www.gsmarena.com/samsung_galaxy_s22_ultra_5g-11251.php",
        pricePKR: 259999
    },
    {
        brand: "Google",
        model: "Pixel 7 Pro",
        displaySize: "6.7 inches",
        color: "Stormy Black",
        img: "./images/google-pixel7-pro-new.jpg",
        details: "https://www.gsmarena.com/google_pixel_7_pro-11908.php",
        pricePKR: 174999
    },
    {
        brand: "OnePlus",
        model: "10 Pro",
        displaySize: "6.7 inches",
        color: "Morning Mist",
        img: "./images/oneplus-10-pro.jpg",
        details: "https://www.gsmarena.com/oneplus_10_pro-11234.php",
        pricePKR: 199999
    },
    {
        brand: "Xiaomi",
        model: "Note 13 Pro",
        displaySize: "6.7 inches",
        color: "Aurora Purple",
        img: "./images//xiaomi-redmi-note-13-pro-5g.jpg",
        details: "https://www.gsmarena.com/xiaomi_redmi_note_13_pro-12581.php",
        pricePKR: 70000
    },
    {
        brand: "Huawei",
        model: "P50 Pro",
        displaySize: "6.6 inches",
        color: "Charm Pink",
        img: "./images/huawei-p50-pro.jpg",
        details: "https://www.gsmarena.com/huawei_p50_pro-11029.php",
        pricePKR: 229999
    },
    {
        brand: "Sony",
        model: "Xperia 1 IV",
        displaySize: "6.5 inches",
        color: "Violet",
        img: "./images/sony-xperia-1-iv-.jpg",
        details: "https://www.gsmarena.com/sony_xperia_1_iv-11521.php",
        pricePKR: 184999
    },
    {
        brand: "Oppo",
        model: "Find X5 Pro",
        displaySize: "6.7 inches",
        color: "Gloss Black",
        img: "./images/oppo-find-x5-pro.jpg",
        details: "https://www.gsmarena.com/oppo_find_x5_pro-11236.php",
        pricePKR: 174999
    },
    {
        brand: "Vivo",
        model: "X80 Pro",
        displaySize: "6.78 inches",
        color: "Cosmic Black",
        img: "./images/vivo-x80-pro.jpg",
        details: "https://www.gsmarena.com/vivo_x80_pro-11407.php",
        pricePKR: 184999
    },
    {
        brand: "Realme",
        model: "GT 2 Pro",
        displaySize: "6.7 inches",
        color: "Paper Green",
        img: "./images/realme-gt2-pro.jpg",
        details: "https://www.gsmarena.com/realme_gt2_pro-11228.php",
        pricePKR: 139999
    },
    {
        brand: "Motorola",
        model: "Edge 30 Pro",
        displaySize: "6.9 inches",
        color: "Cosmos Blue",
        img: "./images/motorola-edge-30-pro.jpg",
        details: "https://www.gsmarena.com/motorola_edge_30_pro-11320.php",
        pricePKR: 139999
    },
    {
        brand: "Nokia",
        model: "G50 5G",
        displaySize: "6.82 inches",
        color: "Ocean Blue",
        img: "./images/nokia-g50.jpg",
        details: "https://www.gsmarena.com/nokia_g50-11077.php",
        pricePKR: 64999
    },
    {
        brand: "LG",
        model: "V60 ThinQ 5G",
        displaySize: "6.8 inches",
        color: "Classy White",
        img: "./images/lg-v60-thinq-5g-b.jpg",
        details: "https://www.gsmarena.com/lg_v60_thinq_5g-10103.php",
        pricePKR: 179999
    },
    {
        brand: "Asus",
        model: "ROG Phone 6",
        displaySize: "6.78 inches",
        color: "Storm White",
        img: "./images/asus-rog-phone6.jpg",
        details: "https://www.gsmarena.com/asus_rog_phone_6-11647.php",
        pricePKR: 169999
    },
    {
        brand: "BlackBerry",
        model: "KEY2 LE",
        displaySize: "4.5 inches",
        color: "Black",
        img: "./images/blackberry-key2-le-.jpg",
        details: "https://www.gsmarena.com/blackberry_key2_le-9292.php",
        pricePKR: 55000
    },
    {
        brand: "Lenovo",
        model: "Legion Duel 2",
        displaySize: "6.92 inches",
        color: "Titanium White",
        img: "./images/lenovo-legion-2-pro-phone-duel2-1.jpg",
        details: "https://www.gsmarena.com/lenovo_legion_duel_2-10839.php",
        pricePKR: 144999
    }
];
function mobileCollections(){
    let card =  document.getElementById("card");
    for(let i=0; i<latestMobilePhones.length; i++){
        card.innerHTML += `<div class="card ms-3 mb-4 main2" style="width: 18rem;">
  <img src="${latestMobilePhones[i].img}" class="card-img-top mt-3 text-center" alt="...">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title text-center"><strong>${latestMobilePhones[i].brand}  ${latestMobilePhones[i].model}</strong></h5>
    <p class="card-text"><strong>Brand:</strong> ${latestMobilePhones[i].brand}</p>
    <p class="card-text"><strong>Model:</strong> ${latestMobilePhones[i].model}</p>
    <p class="card-text"><strong>Display Size:</strong> ${latestMobilePhones[i].displaySize}</p>
    <p class="card-text"><strong>Color:</strong> ${latestMobilePhones[i].color}</p>
    <p class="card-text"><strong>Price(PKR):</strong> ${latestMobilePhones[i].pricePKR} Only</p>
    <a href="${latestMobilePhones[i].details} " class="btn btn-primary target="_blank"">More Details</a>
  </div>
</div> `
    }
}
mobileCollections()