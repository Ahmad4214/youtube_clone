import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.menu.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='shadow-xl w-44 p-6'>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>ARY</li>
        <li>Shorts</li>
        <li>Akshay Siani</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
    </div>
  )
}

export default Sidebar