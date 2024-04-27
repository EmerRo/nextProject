import Post from "../page"
import "./Posts.css"
import { Suspense } from "react"
async function loadPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json()
    return data
}
async function Page ({params}){
    const post = await loadPost(params.id)
    return(
        <div>

            <h1>Page Post {params.id}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr />
            <h3>Otras publicaciones </h3>
        <Suspense fallback={<div>cargando publicaciones....</div>}>
        <Post />

        </Suspense>
        </div>
    )
}

export default Page;