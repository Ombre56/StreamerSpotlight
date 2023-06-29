import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default function Content({ streamerData, checkClickedOnce, message, likeCount, dislikeCount, addNewLike, addNewDislike, updateLikeAndDislike, coloredLike, coloredDislike, handleColoredLike, handleColoredDislike}) {

  return (
    <>
      <div className='fixed mt-4 ml-4 md:mt-10 md:ml-10 font-bold bg-darkblue p-1 md:p-2 rounded-xl'>
        <NavLink to='/'>
          Back to HomePage
        </NavLink>
      </div>
      {(streamerData?.length === 0) ? (
        <p className='text-md md:text-xl'>Loading...</p>
      ) : (
          <div key={streamerData._id} className='flex gap-y-8 flex-col justify-center items-center md:h-screen'>
            <h1 className='text-4xl font-bold mt-24 md:mt-0'>{streamerData.name}</h1>

            <div className='w-44 h-44 md:w-80 md:h-80'>
              <img src="/images/staticImage.png" alt="Static_image" className='object-cover rounded-lg' />
            </div>
            
            <h2 className='text-3xl text-gray font-bold'>{streamerData.platform}</h2>

            <div className='flex justify-center items-center gap-10 cursor-pointer'>
              <div className='flex flex-col gap-y-3' onClick={handleColoredLike}>
                {coloredLike ?
                  <FaThumbsUp className='w-10 h-10 text-green self-center' onClick={addNewLike} />
                  :
                  <FaThumbsUp className='w-10 h-10 self-center' onClick={addNewLike} />
                  }
                <p className='text-md font-bold'>Like {likeCount}</p>
              </div>

              <div className='flex flex-col gap-y-3 cursor-pointer' onClick={handleColoredDislike}>
                {coloredDislike ?
                  <FaThumbsDown className='w-10 h-10 text-red self-center' onClick={addNewDislike} />
                  :
                  <FaThumbsDown className='w-10 h-10 self-center' onClick={addNewDislike} />
                  }
                <p className='text-md font-bold'>Dislike {dislikeCount}</p>
              </div>
            </div>

            <input className='bg-blue rounded text-xl font-bold h-8 w-20 cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-blue transition-all ease-in-out duration-500' type="submit" value="Vote" onClick={updateLikeAndDislike} />

            {message && <span className='text-bold text-xl'>{message}</span>}

            <div className='w-72 md:w-4/5 bg-blue p-10 rounded-2xl'>
              <p>{streamerData.description}</p>
            </div>
          </div>
        )
      }
    </>
  )
}
