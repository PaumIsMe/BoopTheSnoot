function makeOwO(){
    collection = document.getElementsByClassName("eye");
    Array.from(collection).forEach(elem => {
        console.log(elem);
        elem.classList.add('owo');
        elem.classList.remove('uwu');
    })
}

function makeUwU(){
    document.getElementsByClassName("eye").classList.add('uwu');
    document.getElementsByClassName("eye").classList.remove('owo');  
}