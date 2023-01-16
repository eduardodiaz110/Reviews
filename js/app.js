// local data reviews
const reviews = [{
    id: 1,
    name:"Susan Smith",
    job:"Web Developer",
    img:"./images/person-1.jpg",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
        id:2,
        name:"Eduardo Diaz",
        job:"Full Developer",
        img:"./images/person-1.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
        id:3,
        name:"Miguel Diaz",
        job:"Fisico Matematico",
        img:"./images/template.jpg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    }
]

//seleccionar items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const btns = document.querySelectorAll(".btn");

//set staring item

let currentItem = 1;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});




// funcion para cambiar el texto
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// funciones para click despues y antes

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem> reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem< 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})


// funcion para surprise me

function getRandomNumber (){
    return Math.floor(Math.random() * reviews.length) ;
}

randomBtn.addEventListener("click", function(){
    let randomnumero = getRandomNumber();
        currentItem = randomnumero;
        showPerson(currentItem);
        console.log(currentItem)

    })


