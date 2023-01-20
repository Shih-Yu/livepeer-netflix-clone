import { useMemo } from 'react';
import { getAccount } from '@wagmi/core';
import Image from 'next/image';
import imageLoader from '../imageLoader';
import heroImage from 'public/hero-image.jpeg'

export default function Main() {
  const account = getAccount();
  console.log(account);
  

  const isConnected = useMemo(() => account.address, [account.address]);

  return (
    <>
      <div>
        {isConnected ? (
          <div className=' flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold underline text-center mt-[40px]'>
              Select the categories and enjoy!
            </h1>
            <Image
              className='rounded-lg m-5'
              loader={imageLoader}
              unoptimized
              src={heroImage}
              alt={'hero image'}
              width={1200}
              height={1000}
            />
          </div>
        ) : (
          <div className='mt-5'>
            <h1 className='text-3xl font-bold underline text-center mb-5'>Welcome</h1>
            <h1 className='text-3xl font-bold underline text-center'> Please Login</h1>
          </div>
        )}
      </div>
    </>
  );
}
