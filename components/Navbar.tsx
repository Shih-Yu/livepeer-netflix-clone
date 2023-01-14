import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='flex mt-5 justify-center mb-5'>
        <Link
          href='/movies/newReleases'
          className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'
        >
          New Releases
        </Link>
        <Link
          href='/movies/nowPlaying'
          className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'
        >
          Now Playing
        </Link>
        <Link href='/movies/popular' className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'>
          Popular
        </Link>
        <Link href='/movies/topRated' className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'>
          Top Rated
        </Link>
      </nav>
    </>
  );
}
