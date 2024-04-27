import PostCard from '@/components/PostCard'

async function loadPosts(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
//    await new Promise((resolve)=>setTimeout(resolve,5000))
   return data
}

//RSC
async function Postpage() {

    const posts = await loadPosts()
    console.log(posts)
  return (
    <div className='grid grid-cols-3 gap-5 m-5 p-10'>
        {posts.map((post)=>(
            <PostCard post={post} key={post.id}/>
        ))}
        Postpage</div>
  )
}

export default Postpage