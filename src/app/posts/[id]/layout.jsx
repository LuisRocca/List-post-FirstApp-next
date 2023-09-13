import Link from 'next/link';
import React from 'react';
import { getPost } from '../../service/httpServices';

export default async function Post({ children, params }) {
  const { id } = params;
  const posts = await getPost(id);
  return (
    <div className=''>
      <article key={posts.id}>
        <h2 className='text-xl font-semibold text-gray-600'>{posts.title}</h2>
        <p className='text-gray-600'>{posts.body}</p>
        <Link
          href={`/posts/${id}/comments`}
          className='text-blue-500 hover:underline'
        >
          Leer más
        </Link>
        {children}
      </article>
    </div>
  );
}
