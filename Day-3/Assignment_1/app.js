const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// function to generate the random color 
const getRandomColor = () =>{
    let random = '#';
    for(let i=1; i<=6; i++){
        let randomNumber = Math.floor(Math.random() * hexArray.length);
        // console.log(randomNumber);
        random = random + hexArray[randomNumber]
        // console.log(random);
    }
    return random;
}

// function to set the backgroundColor 
const changeBackgroundColor = () =>{
    let bgColor = getRandomColor()
    console.log(bgColor);
    document.body.style.backgroundColor = bgColor;
}