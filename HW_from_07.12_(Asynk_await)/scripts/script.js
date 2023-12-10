const fetchPosts = async(callback)=> {
    const res = await fetch('https://dummyjson.com/posts')
    const posts = res.json()
    callback(posts)
  
}
fetchPosts()

const fetchUsers = async(data) => {
    data.posts.slice(0,10).forEach(post => {
        // const res = await fetch('https://dummyjson.com/users/1')
        
    });
}


