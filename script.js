let data=[
    {
       "title": "Titan",
       "description": "black dial analog watch",
       "price":"Rs.4999",
        image_url:"https://i.ibb.co/8dxq59D/95033-NM01-J-2.jpg",
                
    },
    {
        "title": "Daniel Wellington",
        "description": "Classic petite melrose analog white dial",
        "price":"Rs.16900",
        image_url:"https://i.ibb.co/8NYgVgZ/classic-bracelet-satin-white-oliviavlachos.jpg",
                 
    },
    {
        "title": "Iphone 13 pro",
        "description":"Apple iphone 13 pro(128GB)",
        "price":"Rs.108,900",
        image_url:"https://i.ibb.co/PQX3yDY/79729978.webp",
                 
    },
]
let productsHTML="";

data.forEach((obj)=>{
    productsHTML=productsHTML  +
    `
    <div="product">
      <h1>${obj.title}</h1>
      <p>${obj.description}</p>
      <div>${obj.price}</div>
      <div><img src="${obj.image_url}"/></div>
      <button>Buy later</button>
    </div>
    `
});
document.getElementById('container').innerHTML=productsHTML;

    
    
    
    
    