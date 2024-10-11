document.getElementById('api1button').addEventListener('click', async () => {
    await fetch('https://official-joke-api.appspot.com/random_joke/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api1displayer').innerText = JSON.stringify(data.setup,null,2)
            document.getElementById('api1follower').textContent = JSON.stringify(data.punchline,null,2)          
            console.log(data)
        })
})

document.getElementById('api2button').addEventListener('click', async () => {
    await fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            len = data.preview.length
            document.getElementById('api2displayer').innerHTML = null
            document.getElementById('random-image').src = data.preview[len - 1];
            console.log(data)
        })
})

const text = document.querySelector('.logoText p');
text.innerHTML = text.innerText.split("").map(
  (char,i) =>
  `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join("")