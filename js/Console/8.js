var product=[
    {productId: 1234,
    productName: "whey",
    productPrice:1999,
    Brand: "ON"
    },
    {productId:1324,
    productName: "Mad Angles",
    productPrice:20,
    Brand:"Bingo"
    },
    {productId:1423,
    productName:"Veggie Sticks",
    productPrice:"99",
    Brand:"Too Yum"
    }]
  product.forEach(productObject=>{console.log(productObject.productId)
  console.log(productObject.productName)
  console.log(productObject.productPrice)
  console.log(productObject.Brand)
  })