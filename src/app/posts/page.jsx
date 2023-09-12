
import React from 'react'
import Posts from '../components/Posts'
import { getAllPost } from '../service/httpServices'
export default async function PostsPage () {
  const posts = await getAllPost() 
  return <Posts posts={posts}/>
}
