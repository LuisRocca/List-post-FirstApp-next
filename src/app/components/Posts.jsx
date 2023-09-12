"use client";

import LikeButton from "../components/LikeButton";
import Link from "next/link";
import { useSort } from "../hooks/useSort";
import { usePaginate } from "../hooks/usePaginate"

export default function Posts({ posts }) {

  const { sortElements, activeSort } = useSort(posts);
  const { setCurrentPage, pagination, currentPage } = usePaginate(5);
  
  const nextPage = () => {
    setCurrentPage(currentPage + 5)
  };
  const prevPage = () => {
    if (currentPage <= 0) return
    setCurrentPage(currentPage - 5)
  };

  const postsPage = pagination(sortElements);
  const handleChangeSort = () => {
    activeSort();
  };

  return (
    <section>
      <button
        className="mb-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleChangeSort}
      >
        Sort
      </button>    
      <button
        className="mb-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={prevPage}
      >
        Preview Page
      </button>
      <button
        className="mb-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={nextPage}
      >
        Next Page
      </button>
      {postsPage.map((post) => (
        <article
          className="bg-slate-800 p-4 rounded-lg shadow-md mb-5"
          key={post.id}
        >
          <Link href={"/posts/[id]"} as={`/posts/${post.id}`}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </section>
  );
}
