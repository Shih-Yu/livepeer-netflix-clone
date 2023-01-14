import { useState } from 'react'
import Image from 'next/image';
import { TopRatedMovies } from '../types';
import imageLoader from '../imageLoader';
import NewRelease from '../components/NewReleases'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import NowPlaying from '../components/NowPlaying';


export default function Home() {
 
  return (
    <div>
      <h1>Home</h1>
      <NewRelease />
      <Popular /> 
      <TopRated />
      <NowPlaying />
      </div>
  );
}