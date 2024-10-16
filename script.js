document.getElementById('api1button').addEventListener('click', async ()=>{
    await fetch('https://official-joke-api.appspot.com/random_joke/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api1displayer').innerText = JSON.stringify(data.setup);
            document.getElementById('api1follower').innerText = JSON.stringify(data.punchline);

            console.log(data);
        })
})

document.getElementById('api3button').addEventListener('click', ()=>{
    let title =prompt('title: ', 'hlo')
    let body =prompt('body: ', 'hlo')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body:body,
            userId: 1
        })

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('api3displayer').innerText = JSON.stringify(data.id);
        })

})