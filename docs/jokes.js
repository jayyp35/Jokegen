
const jok = document.getElementById('joke');
const jokebtn = document.querySelector('#nextbtn');

const generateJoke = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res) => res.json()).then((data) => jok.innerHTML = data.joke).catch((error) => {
        console.log('error');
    })
}
jokebtn.addEventListener('click',generateJoke);
generateJoke();