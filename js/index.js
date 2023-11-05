const heading = document.getElementById("heading")

const btn = document.getElementById("btn")

const paraone = document.getElementById("para-one")

const dog = document.getElementById("dog")

btn.addEventListener("click",function(){
    
    const color = heading.style.color

    if(color == 'red'){
        heading.style.color = 'green'
    }
    else {
        heading.style.color = 'red'
    }
});

paraone.addEventListener("mouseover",function(){
    paraone.style.fontSize = "20px"
})

paraone.addEventListener("mouseout",function(){
    paraone.style.fontSize = "16px"
})

dog.addEventListener("mouseover",function(){
    dog.style.height = "450px"
})

dog.addEventListener("mouseout",function(){
    dog.style.height = "300px"
})

