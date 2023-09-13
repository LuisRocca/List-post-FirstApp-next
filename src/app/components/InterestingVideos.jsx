'use client'

import videos from '../moks/interestingVideos.json';
import { usePaginate } from '../hooks/usePaginate';
export default function InterestingVideos() {
  const { setCurrentPage, pagination, currentPage } = usePaginate(2);

  const nextPage = () => {
    console.log(currentPage);
    if (currentPage >= 4) return;
    setCurrentPage(currentPage + 2);
  };
  const prevPage = () => {
    if (currentPage <= 0) return;
    setCurrentPage(currentPage - 2);
  };

  const postsPage = pagination(videos);
  return (
    <ul className='bg-slate-800 p-4 rounded-lg shadow-md mb-5 flex flex-col justify-items-center items-center'>
      <button
        className='mb-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={prevPage}
      >
        Preview Page
      </button>
      <button
        className='mb-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={nextPage}
      >
        Next Page
      </button>
      {postsPage.map((video) => (
        <li key={video.id} className='mb-5 max-w-xs text-center'>
          <iframe
            width='360'
            height='115'
            src={video.URLVideo}
            title={`${video.title}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <h4 className='text-xl font-semibold mt-5'>{video.title}</h4>
        </li>
      ))}
    </ul>
  );
}
