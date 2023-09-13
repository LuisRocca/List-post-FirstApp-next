import React from 'react'
import Aspirations from '../components/Aspirations'
import InterestingVideos from '../components/InterestingVideos'

export default function About () {
  return (
  <section>
      <h1 className='text-xl font-semibold'>Un poco sobre mi persona</h1>
      <Aspirations />
    <article>
      <h1 className='text-xl font-semibold'>Videos Interesantes</h1>
      <InterestingVideos />
    </article>
  </section>
  )
}
