/* 
1- Create a program that fetches 10 users from the jsonplaceholderAPI

2- Using the data you just fetched, create 10 user cards and show them on the screen.

3- They might appear directly on the screen, or you can fetch the data with a button click, its your choice.

PS: You definitely dont need to use all the data coming from the API, design and style your user cards to your hearts desire!

BONUS: Do a POST request to the https://jsonplaceholder.typicode.com/posts endpoint adding a new post there, and console log the result.


*/
document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.querySelector('dialog')
    
    const dialogBtn = document.querySelector('.dialog__btn')
    dialogBtn.addEventListener('click', () => {
        dialog.close()
    })
    async function getUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users
    }
    const btnEl = document.querySelector('button');
    btnEl.addEventListener('click', addUserCardsToDom)
    async function addUserCardsToDom(){
        const card = document.querySelector('.card')
            if(card){
                dialog.showModal()
                return
            }
        const users = await getUsers()
        for(let user of users){
            createCard(user)
        }
    }
    function createCard(user){
        let card = document.querySelectorAll('.card')
        const cardsEl = document.querySelector('.cards')
        card = document.createElement('div')
        card.classList.add('card')
        for(let key in user){
            if(key === 'address' || key === 'company'){
                continue
            }
            if(key === 'id'){
                card.setAttribute('data-id', user[key])
                continue
            }
            const div = document.createElement('div')
            div.classList.add('pair')
            const spanValue = document.createElement('span')
            const spanKey = document.createElement('span')
            spanKey.classList.add('card-key')
            spanKey.textContent = `${key}: `
            spanValue.textContent = user[key]
            div.appendChild(spanKey)
            div.appendChild(spanValue)
            card.appendChild(div)
            cardsEl.appendChild(card)
        }
    }
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', async (e) => {
        e.preventDefault()
        const data = {
            name: e.target['name'].value,
            surname:  e.target['surname'].value,
            email: e.target['email'].value,
            phone: e.target['phone'].value
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        const dialogMessage = document.querySelector('.dialog__message')
        dialogMessage.textContent = response.status === 201 ? 'User added successfully' : 'Something went wrong'
        dialog.showModal()
    })
})