import React from "react";
import apirations from "../moks/apirations.json";
import videos from "../moks/interestingVideos.json";
import LikeButton from "../components/LikeButton";

export default function About() {
  return (
    <section>
      <h1 className="text-xl font-semibold">Un poco sobre mi persona</h1>
      <ul className="bg-slate-800 p-4 rounded-lg shadow-md mb-5">
        {apirations.map((apiration) => (
          <li key={apiration.id}>
            <h2 className='className="text-xl font-semibold'>
              {apiration.title}
            </h2>
            <p className="text-gray-600">{apiration.content}</p>
            <LikeButton />
          </li>
        ))}
      </ul>
      <h1 className="text-xl font-semibold">Videos Interesantes</h1>
      <ul className="bg-slate-800 p-4 rounded-lg shadow-md mb-5">
      {videos.map((video) => (
        <li key={video.id} className="mb-5">
          <iframe
            width="360"
            height="115"
            src={video.URLVideo}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h4>{video.title}</h4>
        </li>
      ))}
      </ul>
    </section>
  );
}
