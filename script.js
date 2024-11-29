const container = document.querySelector('.container')


fetch("https://api.escuelajs.co/api/v1/users")
.then(res => res.json())
.then(data => {

    data.map(user => {
        container.innerHTML += `
<div class="user-box">
        <div>${user.id}</div>
        <img src="${user.avatar}" alt="User Avatar" class="avatar">
        <h1>${user.name}</h1>
        <p class="label">Role: </p><p>${user.role}</p>
        <div class="user-details">
            <p><span class="label">Email:</span> ${user.email}</p>
            <p><span class="label">Account Created:</span> <span class="timestamp">${user.creationAt}</span></p>
            <p><span class="label">Last Updated:</span> <span class="timestamp">${user.updatedAt}</span></p>
        </div>
        <button>Delete user</button>
        </div>`

        })


})

const btn = document.querySelectorAll('button')

btn.forEach(item => {
    btn.onclick = () => {
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('removed');
        })
    }
})