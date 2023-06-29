import React, { useEffect, useReducer, useState } from 'react'
import AllStreamers from '../components/HomePage/AllStreamers'
import { baseURL } from '../utils/constant';

const initialState = {
  name: '',
  platform: '',
  description: '',
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return {
        ...state,
        [action.field]: action.payload
      }
    case 'RESET':
      return initialState
    default:
      throw new Error(`Unhandled expression in switch: ${action.type}`);
  }
}

const options = [
  {
    label: 'Twitch',
    value: 'Twitch'
  },
  {
    label: 'YouTube',
    value: 'YouTube'
  },
  {
    label: 'Kick',
    value: 'Kick'
  },
  {
    label: 'Rumble',
    value: 'Rumble'
  }
]

export default function HomePage() {
  const [formData, dispatch] = useReducer(formReducer, initialState)
  const [message, setMessage] = useState(false);

  const reset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const addNewStreamer = (e) => {
    dispatch({
      type: 'ADD_NEW',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (message) {
        setMessage(false)
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [message]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return (
        console.log("Please fill out this details!")
      )
    }
    let { name, platform, description } = formData;

    const model = {
      name,
      platform,
      description,
    }

  fetch(`${baseURL}/streamers`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(model)
    })
      .then(
        res => res.json()
      )
      .then(res => {
        console.log(res)
      })
    setMessage(true);
    reset();
  }

  return (
    <>
      <div className='mb-10 md:mb-20 w-72 md:w-96'>
        <h2 className='text-2xl mb-2'>Add new Creator</h2>
        <div className='h-1 bg-gray opacity-25 rounded mb-4' />
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-y-6'>
          <div className='flex flex-col md:flex-row justify-between'>
            <label>
              <h2 className='text-lg md:text-xl font-bold'>Name</h2> 
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder='Enter the name'
                id="name"
                className='w-full h-8 rounded bg-inputs text-black pl-1'
                onChange={(e) => addNewStreamer(e)}
                required={true}
              />
            </label>

            <div>
              <h2 className='text-lg md:text-xl font-bold'>Platform</h2>
              <select className='text-black w-full h-8 rounded bg-inputs cursor-pointer p-1 font-bold' name="platform" id="platform" value={formData.platform} onChange={(e) => addNewStreamer(e)} required={true}>
                <option value="DEFAULT" hidden>
                  Select platform
                </option>
                {options.map((option, i) => (
                  <option key={i} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h2 className='text-lg md:text-xl font-bold'>Description</h2>
            <textarea
              name="description"
              id="description"
              placeholder='Enter the description'
              value={formData.description}
              cols="20"
              rows="5"
              required={true}
              onChange={(e) => addNewStreamer(e)}
              className='text-black w-full resize-none p-1 rounded bg-inputs'
            />
          </div>

          <input className='bg-blue rounded text-xl font-bold h-8 cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-blue transition-all ease-in-out duration-500' type="submit" value="Submit" />
        </form>
      </div>

      {message && <span className='text-bold text-xl text-green mb-5'>Successfully added a new creator!</span>}

      <div>
        <h2 className='text-xl md:text-4xl font-bold text-center mb-10'>Streamers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-8'>
          <AllStreamers />
        </div>
      </div>
    </>
  )
}
