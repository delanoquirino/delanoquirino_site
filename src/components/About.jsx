import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b to-black from-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Meu nome é Delano Quirino, tenho 29 anos, formado em Direito e nasci
          em Teresina/PI. Trabalhei por 8 anos em clínicas e hospitais no setor
          de digitação de laudos, onde era responsável pelo fluxo de emissão dos
          laudos médicos. dev.
        </p>

        <br />

        <p className="text-xl">
          Atualmente, trabalho na minha empresa de produtos personalizados e
          paralelo a isso voltei a estudar no começo do ano de 2022 buscando me
          torna um Desenvolvedor Web e como podem ver estou correndo contra o
          tempo para aprender o máximo que posso para garantir uma vaga nesse
          mercado.Apesar de começar tarde, acredito que nesta área existam
          oportunidades para todos, até mesmo para aqueles que começaram um
          pouco tarde, mas que esta se esforçando e dedicando ao máximo.
        </p>
      </div>
    </div>
  );
};

export default About;
