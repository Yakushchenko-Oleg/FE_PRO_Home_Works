const postsBody = document.querySelector('.postsBody')


const showPostWithUser = (userImage, userName, postText, postReactions) => {

    const postContainer = document.createElement('div')
    postContainer.classList.add('postContainer')
    postsBody.append(postContainer)

    const postUsersCont = document.createElement('div')
    postUsersCont.classList.add('postUsersCont')
    const postUserImage = document.createElement('img')
    postUserImage.classList.add('postUserImage')
    postUserImage.src = userImage
    const postUserName = document.createElement('h4')
    postUserName.classList.add('postUserName')
    postUserName.innerText = userName
    postUsersCont.append(postUserImage)

    const postCont = document.createElement('div')
    postCont.classList.add('postCont')
    const postMassage = document.createElement('p')
    postMassage.classList.add('postMassage')
    postMassage.innerText = postText
    const postReaction = document.createElement('p')
    postReaction.classList.add('postReaction')
    postReaction.innerText = `Likes: ${postReactions}`
    postCont.append(postUserName, postMassage, postReaction)

    postContainer.append(postUsersCont, postCont)
}


const fetchUsers = async (data) => {
    const slicedArrOfPosts = data.posts.slice(0, 10)
    try {
        for (posts of slicedArrOfPosts) {

            const res = await fetch(`https://dummyjson.com/users/${posts.userId}`)
            const users = await res.json()
            console.log(users);

            const userImage = users.image
            const userName = users.firstName
            const postText = posts.body
            const postReactions = posts.reactions
            showPostWithUser(userImage, userName, postText, postReactions)
        }
    } catch (error) {
        console.log('problem with function fetchUsers')
    }
}
const fetchPosts = async (callback) => {
    try {
        const res = await fetch('https://dummyjson.com/posts')
    const posts = await res.json()
    callback(posts)
    } catch (error) {console.log(error)}    
}

fetchPosts(fetchUsers)

const fotm = document.querySelector('#form1')



const formInput = document.querySelector('.formInput')
const postText = formInput.value
console.log(formInput.value);


// form.addEventListener('submit', (event) => {
// const mainUserImage = document.querySelector('.mainUserImage')
// const mainUserName = document.querySelector('.mainUserName')
// const userImage = mainUserImage.src
// const userName = mainUserName.textContent

//     showPostWithUser(userImage, userName, postText, 0)
//  price.value = ''
// })