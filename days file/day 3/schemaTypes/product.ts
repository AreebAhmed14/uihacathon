export default {
    name:"product",
    type:"document",
    fields:[
        {name:"name", type:"string", title:"name"},
        {name:"category", type:"string", title:"category"},
        {name:"description", type:"text", title:"desciption"},
        {name:"price", type:"string", title:"price"},
        {name:"stockLevel", type:"number", title:"stockLevel"},
        {name:"id", type:"number", title:"id"},
        {name:"discountPercentage", type:"number", title:"discountPercentage"},
        {name:"imagePath", type:"image", title:"imagePath"},
    ]
}