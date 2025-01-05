import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIOS_API_URL } from '../../utils/constants'
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';

const VedioContainer = () => {

  const [vedioCard , setVedioCard] = useState([]);

  useEffect(()=>{
    getVedio();
  },[]);


  const getVedio = async()=>{
    const responce = await fetch(YOUTUBE_VEDIOS_API_URL);
    const data = await responce.json();
    console.log(data);
    setVedioCard(data.items);
  }

  return (


    
    <div className='flex flex-wrap ml-6 mt-8 justify-center'>
      {
        vedioCard.map((data)=>(
          <Link key={data?.id} to={'/watch?v='+data?.id}>
            <VedioCard  data={data}/>
          </Link>
        ))
      }
      
      
    </div>
  )
}

export default VedioContainer