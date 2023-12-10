 const fetchCard = (callback) => {
     fetch('https://dummyjson.com/users')
         .then((response) => response.json())
         .then((data) => callback(data))
         .catch(() => console.log('problem with a link'))
 }

 const body = document.querySelector('body')

 const renderCard = (users) => {
     const slicedUsers = users.users.slice(0, 15)
     
     slicedUsers.forEach(el => {
         const cartContainer = document.createElement('div')
         cartContainer.classList.add('cartContainer')
         const firstName = document.createElement('h3')
         firstName.innerText = el.firstName
         const lastName = document.createElement('h3')
         lastName.innerText = el.lastName
         const age = document.createElement('p')
         age.innerText = `${el.age} year`
         const email = document.createElement('p')
         email.innerText = `E-mail: ${el.email}`
         const phone = document.createElement('p')
         phone.innerText = el.phone
         const image = document.createElement('img')
         image.src = el.image

         cartContainer.append(firstName, lastName, age, email, phone, image)
         body.append(cartContainer)
     })
 }
 fetchCard(renderCard)