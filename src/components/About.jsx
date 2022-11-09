import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full " >
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500" >About</p>
            </div>

            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id pariatur, fuga obcaecati, non neque nam fugit quas aut iure error molestiae rerum in quos, quae voluptas magnam asperiores eum expedita?
            </p>
            
            <br/>

            <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit blanditiis neque quisquam quia corrupti in, repudiandae reiciendis iusto perspiciatis eligendi? Quae adipisci atque, totam commodi quasi possimus quo laudantium deleniti.</p>

        </div>
    </div>
  )
}

export default About