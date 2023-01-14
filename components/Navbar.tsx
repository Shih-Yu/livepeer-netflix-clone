import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <>
      <div className='flex justify-end my-[30px] mr-[100px]'>
        <ConnectButton />
      </div>
      <div className='flex mt-5 justify-center mb-5'>
        <nav>
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
          <Link
            href='/movies/popular'
            className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'
          >
            Popular
          </Link>
          <Link
            href='/movies/topRated'
            className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'
          >
            Top Rated
          </Link>
          <Link href='/myList' className='hover:bg-zinc-700 rounded px-3 py-1 mr-3 text-2xl'>
            My List
          </Link>
        </nav>
      </div>
    </>
  );
}
