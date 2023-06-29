import React, { useEffect, useState } from 'react';
import { baseURL } from '../utils/constant';
import Content from '../components/StreamerDetails/Content';
import { useParams } from 'react-router-dom';

export default function StreamerDetails() {
  const [streamerData, setStreamerData] = useState([{}]);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const [message, setMessage] = useState('');
  const [coloredLike, setColoredLike] = useState(false);
  const [coloredDislike, setColoredDislike] = useState(false);

  const { streamerId } = useParams();
  const checkClickedOnce = isLike && isDislike;

  useEffect(() => {
    fetch(`${baseURL}/streamers/${streamerId}`).then(
      response => response.json()
      ).then(
        data => {
          setStreamerData(data)
          setLikeCount(streamerData.upVotes)
          setDislikeCount(streamerData.downVotes)
        }
    ).catch(err => console.log(err))
  }, [streamerData.downVotes, streamerData.upVotes, streamerId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (message) {
        setMessage(false)
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [message]);
  
  const addNewLike = () => {
    setLikeCount(likeCount + (isLike ? -1 : 1));
    setIsLike(!isLike)
  };

  const addNewDislike = () => {
    setDislikeCount(dislikeCount + (isDislike ? -1 : 1));
    setIsDislike(!isDislike)
  };

  const handleColoredLike = () => {
    setColoredLike(!coloredLike)
  }

  const handleColoredDislike = () => {
    setColoredDislike(!coloredDislike)
  }

  const updateLikeAndDislike = () => {
    if (checkClickedOnce) {

      setMessage('Not two at once!')
      setLikeCount(likeCount - 1)
      setDislikeCount(dislikeCount - 1)
      setColoredLike(!coloredLike)
      setColoredDislike(!coloredDislike)

    } else if (isLike || isDislike) {
      setMessage('Thanks for your vote!')
      setColoredLike(false)
      setColoredDislike(false)

      fetch(`${baseURL}/streamers/${streamerId}/vote`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          upVotes: likeCount,
          downVotes: dislikeCount,
        })
      })
        .then(
          res => res.json()
        )
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <>
      <Content
        streamerData={streamerData}
        message={message}
        checkClickedOnce={checkClickedOnce}
        likeCount={likeCount}
        dislikeCount={dislikeCount}
        addNewLike={addNewLike}
        addNewDislike={addNewDislike}
        updateLikeAndDislike={updateLikeAndDislike}
        coloredLike={coloredLike}
        coloredDislike={coloredDislike}
        handleColoredLike={handleColoredLike}
        handleColoredDislike={handleColoredDislike}
      />
    </>
  )
}