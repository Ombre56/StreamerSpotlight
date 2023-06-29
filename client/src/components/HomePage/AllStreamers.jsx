import React, { useEffect, useState } from 'react';
import { baseURL } from '../../utils/constant';
import { NavLink } from 'react-router-dom';
import StreamerTile from './StreamerTile';
 
export default function AllStreamers() {
  const [streamersData, setStreamersData] = useState([{}]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(`${baseURL}/streamers`)
        const jsonResult = await result.json();
        setStreamersData(jsonResult)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, []);

  return (
    <>
      {(streamersData?.length === 0) ? (
        <p className='text-md md:text-xl'>Loading...</p>
      ) : (
        streamersData.map((streamer, i) => (
          <NavLink to={`/streamer/${streamer._id}`} key={i}>
            <StreamerTile streamer={streamer} />
          </NavLink>
        ))
      )
      }
    </>
  );
}