// add un event listener for the button
const jokeBtn = document.querySelector('#joke-btn');
const jokeEl = document.getElementById('joke')


jokeBtn.addEventListener('click', changeJoke); 

function changeJoke() {
    const XMLObject = new XMLHttpRequest(); //create object
    
    XMLObject.open('GET', 'https://api.chucknorris.io/jokes/random'); //initialize the object
    
    XMLObject.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                // const div = document.createElement('div');
                // div.innerHTML = JSON.parse(this.responseText).value;
                // jokeEl.appendChild(div);

                jokeEl.innerHTML = JSON.parse(this.responseText).value;
    
            } else {
                // const div = document.createElement('div');
                // div.innerHTML = 'something went wrong';
                // jokeEl.appendChild(div);

                jokeEl.innerHTML = 'sth went wrong';
            }
        }
    }
    
    XMLObject.send();   
}

document.addEventListener('DOMContentLoaded', changeJoke);











