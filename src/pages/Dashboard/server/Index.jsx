import React from 'react'
import { useParams } from 'react-router'
import Chanels from './Chanels';
import ServerActivityArea from './ServerActivityArea';

function Index() {
  const {serverName} = useParams(); 
  return (
    <div className='flex h-full overflow-y-hidden'>
            <div className="flex-none basis-52 bg-[#2f3136] ">
              <Chanels/>
            </div>
            <div className="flex-grow ">
              <ServerActivityArea/>
            </div>
        </div>
  )
}

export default Index