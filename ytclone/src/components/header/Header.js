import React from 'react'
import { useDispatch } from 'react-redux'
import { toogelMenu } from '../../utils/menuSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleOnClickMenu = ()=>{
        dispatch(toogelMenu());
    }

  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={()=>handleOnClickMenu()}
            className='cursor-pointer h-6 mx-2' alt='menu' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=='/>
            <img className='h-6' alt='youtube logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/>
        </div>
        <div className='flex col-span-10 justify-center'>
            <input type='text' placeholder='Search' className='pl-5 border border-gray-400 rounded-l-full p-2 focus:outline focus:outline-blue-800 w-5/12'/>
            <button className='px-5 border border-gray-400 rounded-r-full p-2 '><img className='h-5' alt='search icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohh5kjxuLUL9E2OcttEpO0Mhxj49FA4shPw&s'/></button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        </div>
        
    </div>
  )
}

export default Header