import React from 'react'

const VedioCard = ({data}) => {
  return (
    <div className='w-80 m-2 '>
        <img className='rounded-xl' alt='thumbnail' src={data?.snippet?.thumbnails?.medium?.url}/>
        <h2 className='pt-2 pl-2 font-bold text-xl line-clamp-2'>{data?.snippet?.title}</h2>
        <p className='pt-2 pl-2  text-gray-600'>{data?.snippet?.channelTitle}</p>
        <p className='pl-2 text-gray-600 '>{data?.statistics?.viewCount} Views</p>
        
    </div>
  )
}

export default VedioCard