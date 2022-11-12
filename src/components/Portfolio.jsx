import React from "react";
import pokelist from "../assets/portifolio/pokelist.png";
import sistemalogin from "../assets/portifolio/sistemalogin.png";
import mysite from "../assets/portifolio/mysite.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mysite,
      href:"https://delanoquirino.netlify.app/",
      code:"https://github.com/delanoquirino/delanoquirino_site",
    },
    {
      id: 2,
      src: pokelist,
      href:"https://poke-list-dequi.vercel.app/",
      code:"https://github.com/delanoquirino/poke-list",
    },
    {
      id: 3,
      src: sistemalogin,
      href:"https://sistem-login.vercel.app/",
      code:"https://github.com/delanoquirino/sistem-login",
    },
  ];

  return (
    <div
    name="portfolio"
    className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Confira alguns dos meus trabalhos:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Site
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;
