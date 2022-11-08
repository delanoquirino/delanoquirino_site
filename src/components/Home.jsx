import React from 'react'
import MyFoto from '../assets/my-foto.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800" >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row" >
            <div className="flex flex-col justify-center h-full">
                <h2>
                Olá! Me chame Delano </h2>
                <p>Sou desenvolvedor front-end e este é o meu site. Aqui você conhecerá minha jornada e projetos como desenvolvedor front-end.</p>

                <div>
                    <button>
                        Meus Projetos 
                        <span>
                        <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
                
            </div>
            <div>
                    <img src={MyFoto} alt="minha foto" className="rounded-2x1 mx-auto w2/3 md:w-full " />
            </div>
        </div>
    </div>
  )
}

export default Home
