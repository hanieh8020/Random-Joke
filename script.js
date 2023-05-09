

// select button , joketext
const button=document.querySelector('#button');
const joketext=document.querySelector('#jokeText');


// creat addEventListener for button
button.addEventListener('click',getJoke);

// creat funtion for getJokt
function getJoke(){

    // fetch kardan api 
    fetch('https://icanhazdadjoke.com/' ,{

        headers:{
            'Accept': 'application/json'
        }
        
    }).then(data=>data.json())
    .then(obj=> joketext.innerHTML = obj.joke)
}







