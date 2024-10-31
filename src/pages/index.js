import React from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { Titulo } from '../componentes/title';
import { TituloSessao } from '../componentes/tituloSessao';
/* import { Cartao } from '../componentes/cartao'; */
import { Likes } from '../componentes/likes'
import { Rodape } from '../componentes/rodape';
import Favoritos from '../componentes/favoritos'; // Importando o novo componente

const projetos = [
  { nome: 'Aluna Destaque', descricao: 'Sou a Isabela e estudo muito, por issomeu rendimento academico foi alto e eu fui aluna destaque' },
  { nome: 'Handebol', descricao: 'jogo desde 2019 e tenho uma paixão muito grande pelo esporte, já viajei para alguns lugares somete para jogar handebol, minha viagem mais recente foi para "Vila Velha- ES" onde competi e fiquei em segundo lugar.' },
  { nome: 'Emprego', descricao: 'Eu tenho uma única obrigação que é os meus estudos mas apesar de só estudar, eu trabalho para minha mãe. minha mãe é professora e ela me paga para dfazer alguma de suas obrigações, com ex; lançar notas no sistema educacional da instituição ao qual ela trabalha, lançar faltas, conteúdos dados em sala de aula entre outros.' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Isabela Sousa"
        subtitulo="Bem-vindo ao meu espaço"
        descricao="Aqui você encontrará uma seleção dos meus projetos e experiências."
      />
      <Likes/>
      <Titulo nome="Projetos" subnome="Alguns dos meus trabalhos recentes" />
     {/*  <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Ver Projeto"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section> */}
      <Favoritos projetos={projetos} /> 
      <TituloSessao titulo="Experiência e Educação" />
      <Rodape 
        linkGithub="https://github.com/JoaoIto"
        linkLinkedin="https://www.linkedin.com/in/joao-ito-b27b821b9/"
        linkEmail="mailto:joaoIto@gmail.com"
      />
    </div>
  );
}