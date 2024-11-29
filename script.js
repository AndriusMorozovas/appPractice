const container = document.querySelector('.container')


fetch("https://api.escuelajs.co/api/v1/users")
.then(res => res.json())
.then(data => {
    console.log(data)
})

