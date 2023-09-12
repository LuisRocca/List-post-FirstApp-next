import React from 'react'
import LikeButton from '../components/LikeButton'
import Link from 'next/link'
import { getAllPost } from '../service/httpServices'
// const fechtingDatas = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
// }
export default async function PostsPage () {
    const posts = await getAllPost()
  return (
    <section>
        {
            posts.map((post) => (
              <article className="bg-slate-800 p-4 rounded-lg shadow-md mb-5" key={post.id}>
                  <Link href={'/posts/[id]'} as={`/posts/${post.id}`}>
                   <h2 className="text-xl font-semibold">{post.title}</h2>
                   <p className="text-gray-600" >{post.body}</p>
                  </Link>
                   <LikeButton />
                </article>
            ))
        }
    </section>
  )
}
