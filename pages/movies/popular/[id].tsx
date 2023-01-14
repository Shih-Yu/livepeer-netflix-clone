import React from 'react';
import { Movies, MovieDetails, Trailer } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../../../imageLoader';

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API}&language=en-US`
  );
  const { results }: Movies = await res.json();

  return {
    paths: results.map((movie) => {
      return {
        params: {
          id: String(movie.id),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: String } }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API}&language=en-US`
  );
  const movie = await res.json();

  const resVideo = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.TMDB_API}&language=en-US`
  );

  const videos = await resVideo.json();

  const trailer = videos.results.filter((video:any) => video.type === 'Trailer')

  return {
    props: {
      movie,
      trailer: trailer[0]
    },
  };
}

export default function MoviesPage({ movie, trailer }: { movie: MovieDetails, trailer:Trailer }) {
  return (
    <div className='flex flex-row '>
      <Image
        className='rounded-lg m-5 basis-1/4'
        loader={imageLoader}
        unoptimized
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={400}
        height={500}
      />
      <div className='basis-1/4'>
        <h1 className='text-5xl mt-5'>{movie.title}</h1>
        <p className='mt-5'>Category: {movie.genres.map((x) => x.name)}</p>
        <p className='mt-5'>Plot: {movie.overview}</p>
        <p className='mt-5'>Release Date: {movie.release_date}</p>
        <p className='mt-1'>Rating: {movie.vote_average} /10</p>
        <p className='mt-1'>Time: {movie.runtime} Mins.</p>
        <div className='mt-5 flex  flex-col justify-end w-36'>
          <Link href={`https://www.youtube.com/watch?v=${trailer?.key}`}>
            <button className='bg-amber-600 rounded px-3 py-1 mt-5'>Preview</button>
          </Link>
          <button className='bg-blue-500 rounded px-3 py-1 mt-5'>Watch</button>
        </div>
      </div>
    </div>
  );
}
