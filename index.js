//create
let productName=document.getElementById('text1');
let productPrice=document.getElementById('number');
let productDescription=document.getElementById('text2');
let update=document.getElementById('update');
let add=document.getElementById('add');
let allProducts= JSON.parse(localStorage.getItem("allProducts"))||[];
displayProduct();



function addProduct(){ 
    
let msg=validPhrase();
    if(msg === ""){


   let newProduct={
        name: productName.value ,
        price: Number(productPrice.value),
        description: productDescription.value
    }
   
allProducts.push(newProduct);


console.log(allProducts);
localStorage.setItem("allProducts",JSON.stringify(allProducts));

clearProduct();

displayProduct()

}
else {
  

    Swal.fire({
        icon: "error",
        title: "Error...",
        text: msg,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }}



//clear aftar addProduct

function clearProduct(){
    newProduct ={
        name: productName.value="" ,
        price: Number(productPrice.value =""),
        description: productDescription.value=""
    }
}

//display products in table

function displayProduct(){
let container="";
for(let i=0;i<allProducts.length;i++){

container +=`<tr>
   <td>${1+i}</td> 
     <td>${allProducts[i].name}</td>
    <td>${allProducts[i].price}</td>
    <Td>${allProducts[i].description}</Td>
    <td><button onclick="updateProduct(${i})" >Update</button></td>
    <td><button onclick="deleteElement(${i})">Delete</button></td>
</tr>`
}
document.getElementById('body').innerHTML=container;
}

//delete element from table

function deleteElement(factor){
    allProducts.splice(factor,1);
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    displayProduct();
    
    } 

//research process

function reseachElement(){

let x=document.getElementById('resarch').value.trim().toLowerCase();
let collection="";
for(let i=0;i<allProducts.length;i++){

if(allProducts[i].name.toLowerCase().includes(x)){

    collection +=`<tr>
    <td>${1+i}</td> 
      <td>${allProducts[i].name}</td>
     <td>${allProducts[i].price}</td>
     <Td>${allProducts[i].description}</Td>
     <td><button    onclick=" updateProduct(${i})">Update</button></td>
     <td><button onclick="deleteElement(${i})">Delete</button></td>
 </tr>`

}
}
document.getElementById('body').innerHTML=collection;
}



//valid



function validPhrase(){

let regulx=/^[A-Z][a-z]{2,8}$/;
let regulx2=/^([2-7][0-9]|18|19|80)$/i
let regulx3=/^[a-z]{3,10}$/


if( regulx.test(productName.value)==false){

return "Start with capital letter , min letters is 3 and max is 8";


}else if( regulx2.test(productPrice.value)==false){
    return "min number is 18 and max number is 80";

}
else if( regulx3.test( productDescription.value)==false){
    return "min letters is 3 and max is 9";

}
else{
   return "";
}
}



//update function


function updateProduct(number){

    productName.value = allProducts[number].name;
    productPrice.value = allProducts[number].price;
    productDescription.value = allProducts[number].description;
    update.style.display="block";
    add.style.display="none";
    currentIndex = number;
}


update.onclick = function () {
    if (currentIndex !== -1) {
       
        allProducts[currentIndex] = {
            name: productName.value,
            price: Number(productPrice.value),
            description: productDescription.value
        };

    
        localStorage.setItem("allProducts", JSON.stringify(allProducts));

      
        displayProduct();

        clearProduct();

        update.style.display = "none";
        add.style.display = "block";
        currentIndex = -1; // إعادة ضبط 
    }
};
function addButton() {
    update.style.display = "none";
    add.style.display = "block";
    clearProduct();
}
