// Products Dummy Data
let products = {
    "product1" : {
        id         : 1,
        "title"    : "Adidas Adicolor Classics 3-Stripes Tee",
        "price"    : 949,
        "discount"    : "25%",
        "colors"   : [
          { "code" : '#000', "image" : 'p1/01.jpg' },
          { "code" : '#fff', "image" : '' }
        ],
        "sizes"    : ["s", "m","l", "xl", "xxl"],
        "rates"    : 22,
        "stars"    : 4,
        "brand"    : {
          "name": "adidas",
          "logo": "adidas.png"
        },
        "category" : "Men",
        "type" : "T-shirt",
        "image"    : "p1/01.jpg",
        "gallery": [
          'p1/01.jpg',
          'p1/02.jpg',
          'p1/03.jpg', 
          'p1/04.jpg', 
          'p1/05.jpg', 
        ]
    },
    "product2" : {
        id         : 2,
        "title"    : "Adicolor Classics 3-Stripes Tee - Adidas",
        "price"    : 949,
        "discount"    : "25%",
        "colors"   : [
          { "code" : '#000', "image" : 'p2/01.jpg' },
          { "code" : '#fff', "image" : 'p2/02.jpg' }
        ],
        "sizes"    : ["s", "m","l", "xl", "xxl"],
        "rates"    : 22,
        "stars"    : 3,
        "brand"    : {
          "name": "adidas",
          "logo": "adidas.png"
        },
        "category" : "Men",
        "type" : "T-shirt",
        "image"    : "p2/01.jpg",
        "gallery": [
          'p2/01.jpg',
          'p2/02.jpg',
          'p2/03.jpg', 
          'p2/04.jpg', 
          'p2/05.jpg', 
        ]
    },
    "product3" : {
        id         : 3,
        "title"    : "Blue adidas Adicolor Classics 3-Stripes T-Shirt",
        "price"    : 949,
        "discount"    : "25%",
        "colors"   : [
          { "code" : '#000', "image" : 'p3/01.jpg' },
          { "code" : '#fff', "image" : '' }
        ],
        "sizes"    : ["s", "m","l", "xl", "xxl"],
        "rates"    : 22,
        "stars"    : 2,
        "brand"    : {
          "name": "adidas",
          "logo": "adidas.png"
        },
        "category" : "Men",
        "type" : "T-shirt",
        "image"    : "p3/01.jpg",
        "gallery": [
          'p3/01.jpg',
          'p3/02.jpg',
          'p3/03.jpg', 
          'p3/04.jpg', 
          'p3/05.jpg', 
          'p3/06.jpg'
        ]  
    },
    "product4" : {
        id         : 4,
        "title"    : "Adidas Adicolor Classics 3-Stripes T-Shirt - Green",
        "price"    : 949,
        "discount"    : "25%",
        "colors"   : [
          { "code" : '#000', "image" : '' },
          { "code" : '#fff', "image" : 'p4/02.jpg' }
        ],
        "sizes"    : ["s", "m","l", "xl", "xxl"],
        "rates"    : 22,
        "stars"    : 4,
        "brand"    : {
          "name": "adidas",
          "logo": "adidas.png"
        },
        "category" : "Men",
        "type" : "T-shirt",
        "image"    : "p4/01.jpg",
        "gallery": [
          'p4/01.jpg',
          'p4/02.jpg',
          'p4/03.jpg', 
          'p4/04.jpg', 
          'p4/05.jpg', 
          'p4/06.jpg'
        ]    
    },
    "product5" : {
        id         : 5,
        "title"    : "Camiseta Aeroready Designed 2 Move Feelready",
        "price"    : 949,
        "discount"    : "25%",
        "colors"   : [
          { "code" : '#000', "image" : 'p5/01.jpg' },
          { "code" : '#fff', "image" : 'p5/02.jpg' }
        ],
        "sizes"    : ["s", "m","l", "xl", "xxl"],
        "rates"    : 22,
        "stars"    : 4,
        "brand"    : {
          "name": "adidas",
          "logo": "adidas.png"
        },
        "category" : "Men",
        "type" : "T-shirt",
        "image"    : "p5/01.jpg",
        "gallery": [
          'p5/01.jpg',
          'p5/02.jpg',
          'p5/03.jpg', 
          'p5/04.jpg', 
          'p5/05.jpg', 
          'p5/06.jpg'
        ]
    },
};


// Get Products Function
export const getProduct = (id) =>
  new Promise((resolve, reject) => {
    const product = products[id];
    if (!product) {
      reject(new Error('Product not found'))
    }
    resolve(products[id])
});

// Get Similar Products Function
export const getSimilarProducts = (type) =>
  new Promise((resolve, reject) => {
    let similarProducts = [];
    for (let product in products) { 
      if ( products[product].type === type ) {
        similarProducts.push(products[product])
      }
    }  
    if (!similarProducts) {
      reject(new Error('Similar Products not found'))
    }
    resolve(similarProducts)
});


// Ads Dummy Data

let ads = {
    "ad1" : {
      "id"        : "1",
      "adText"    : "valentine's day offers by two get one free ",
      "adLink"    : "#",
      "linkText"  :  "Shop Now"
    },
    "ad2" :  {
      "id"        : "2",
      "adText"    : "valentine's day offers by two get one free ",
      "adLink"    : "#",
      "linkText"  :  "Shop Now"
    },
    "ad3" :  {
      "id"        : "3",
      "adText"    : "valentine's day offers by two get one free ",
      "adLink"    : "#",
      "linkText"  :  "Shop Now"
    },
}

// Gets Ads Function
export const getAds = () =>
  new Promise((resolve, reject) => {
  const allAds = ads;
  if (!allAds) {
      reject(new Error('ads not found'))
  }
  resolve(Object.values(allAds))
});