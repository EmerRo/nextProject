"use client"
import React from 'react'
import Link from 'next/link'

//RCC
function PostCard({post}) {
  return (
   
    <div className='bg-gray-950 p-10 mb-4 flex flex-col'>
    <div>
      <Link href={`/post/${post.id}`}>
        <h3 className='text-xl font-bold mb-2'>{post.id}. {post.title}</h3>
      </Link>
      <p className='text-slate-300'>{post.body}</p>
    </div>
    <div className="mt-auto">
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => {
        alert('click funcionando');
      }}>click</button>
    </div>
  </div>
  )
}

export default PostCard