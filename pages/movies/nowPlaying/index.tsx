import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movies } from '../../../types';
import imageLoader from '../../../imageLoader';
import Link from 'next/link';

export default function NowPlaying() {
  const [movies, setMovies] = useState<Movies>();

  useEffect( () => {
    const fetchData = async () => {
    const res = await fetch('/api/nowPlaying', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response: Movies = await res.json();
    setMovies(response);
    console.log(response);
    }
    fetchData();
},[])

  return (
    <>
      <div className='flex flex-row flex-wrap justify-around'>
        {movies?.results?.map((movie) => (
          <div key={movie.id} className='mb-5'>
            <Link href={`/movies/nowPlaying/${movie.id}`}>
              <Image
                className='rounded-lg'
                loader={imageLoader}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={400}
                height={500}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}