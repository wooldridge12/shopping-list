const shoppingList = [
{
    id: 1,
    item:"Milk",
    price: 2,
    weight: 1,
    brand: "Kroger",
},
{
    id: 2,
    item: "Eggs",
    Price: 0.89,
    weight: 0.4,
    brand: "Eggy",
},
{
    id: 3,
    item: "Pizza Rolls",
    price: 7,
    weight: 1,
    brand: "tostitos",
},
{
    id: 4,
    item: "Steak",
    price: 12.89,
    weight: 3,
    brand: "Round House",
},
{
    id: 5,
    item: "Banana",
    price: 0.48,
    weight: 1,
    brand: "nanas",
},
{
    id: 6,
    item: "Hamburger Buns",
    price: 4.99,
    weight: 0.3,
    brand: "Bunny",
},
{
    id: 7,
    item: "BBQ",
    price: 1.29,
    weight: 0.7,
    brand: "Sweet Baby Rays",
}
]
// console.log(shoppingList);

const addToShoppingList = [
{
    id:8,
    item: "Soda",
    dateCreated: "April, 16: At 15:48",
    price:3.89,
},
{
    id:9,
    item: "Chips",
    dateCreated: "April, 16: At 12:48",
    price:2.36,
},
{
    id:10,
    item: "Peanuts",
    dateCreated: "April, 18: At 12:48",
    price:0.36,
},
{
    id:11,
    item: "blue berries",
    dateCreated: "April, 18: At 10:48",
    price: 2,
},
{
    id:12,
    item: "gatorade",
    dateCreated: "April, 15: At 12:48",
    price: 9,
},
{
    id:13,
    item: "rice cakes",
    dateCreated: "April, 19: At 12:48",
    price: 4,
}
]
shoppingList.push(addToShoppingList);
// console.log(shoppingList);

// const  itemsOverEightDollars = () => {


    let pricesMatch = []
for (const list of shoppingList) {
    if (list.price > 7 ) {
        console.log (list)
    }
    // else {
    //     console.log(`Items under 8 dollars ${list.item}`)
    // }
}
// }
// itemsOverEightDollars();