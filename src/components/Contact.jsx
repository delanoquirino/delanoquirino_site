import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contato</p>
                <p className="py-6">Envie uma mensagem através do formulário abaixo:</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/bcbd7112-59de-49b8-97f7-f535f8f206dc" method="POST" className="flex flex-col w-full md:w1/2">
                    <input type="text" name="name" placeholder="Insira seu nome" className="p-2 bg-transparent border-2 rounded-md text-white focus-inline-none"
                    />
                    <input type="text" name="email" placeholder="Insira seu e-mail" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus-inline-none"
                    />
                    <textarea name="message" placeholder="Insira sua mensagem" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" >
                        Enviar
                    </button>

                </form>

            </div>
        </div>
    </div>
  )
}
