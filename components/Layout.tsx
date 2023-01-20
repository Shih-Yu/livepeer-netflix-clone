import Navbar from './Navbar';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAccount } from '@wagmi/core';
import { useEffect, useMemo, useState } from 'react';

export default function Layout( { children }: { children: any } ) {
  const account = getAccount();
  console.log(account);
  
  // const [ address, setAddress ] = useState<string>();

  // useEffect( () => {
  //   setAddress( account.address )
  //   console.log(account);
    
  // },[account])
const isConnected = useMemo( () => account.address, [ account.address ] );
  
  
  return (
    <>
      <div className='flex justify-end my-[30px] mr-[100px]'>
        <ConnectButton />
      </div>
      {/* {address !== undefined && <Navbar />} */}
      {isConnected !== undefined && <Navbar />}
      <div>{children}</div>
    </>
  );
}
