const counter = document.getElementById('count');
let count = 0;


// function to update the count variable 
const updateCounter = () =>{
    counter.textContent = ++count;
}