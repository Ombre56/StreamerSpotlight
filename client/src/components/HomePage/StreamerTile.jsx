import React from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default function StreamerTile({streamer}) {
  return (
    <div className='bg-darkblue w-52 h-72 rounded-xl flex flex-col hover:shadow-lg hover:shadow-blue transition-all ease-in-out duration-500'>
      <div>
        <img className='object-cover rounded-t-xl h-40 w-full' src="/images/staticImage.png" alt="Static_image" />
      </div>

      <div className='flex flex-col justify-center items-center grow'>
        <h1 className='text-xl font-bold uppercase pb-2'>{streamer.name}</h1>
        <div className='text-gray'>{streamer.platform}</div>

        <div className='flex gap-x-6 pt-2'>
          <p className='text-green font-bold flex gap-x-1 items-center'><FaThumbsUp /> {streamer.upVotes}</p>
          <p className='text-red font-bold flex gap-x-1 items-center'><FaThumbsDown /> {streamer.downVotes}</p>
        </div>
      </div>
    </div>
  )
}
