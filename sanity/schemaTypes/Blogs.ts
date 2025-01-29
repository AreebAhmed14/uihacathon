export default {
    name:"blog",
    type:"document",
    fields:[
        {name:"title", type:"string", title:"Title"},
        {name:"description", type:"text", title:"desciption"},
        {name:"shortdes", type:"string", title:"Short description"},
        {name:"id", type:"number", title:"id"},
        {name:"imagePath", type:"image", title:"imagePath"},
    ]
}