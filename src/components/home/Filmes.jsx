import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then((resposta) => {
        setFilmes(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar filmes:", erro);
      });
  }, []);

  return (
    <Conteudo>
      <Titulo>Em Cartaz</Titulo>

      <FilmesContainer>
        {filmes.map((filme) => (
          <Filme key={filme.id}>
            <img src={filme.posterURL} alt={filme.title} />
          </Filme>
        ))}
      </FilmesContainer>
    </Conteudo>
  );
}

const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  font-family: 'Sarala', sans-serif;
  color: white;
  font-size: 4vw;
`;

const FilmesContainer = styled.div`
  ${centerFlex};
  flex-wrap: wrap;
  gap: 5vw;
  width: 100%;
  height: auto;
`;

const Conteudo = styled.div`
  ${centerFlex};
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 4vw;
  flex-direction: column;
  width: 90vw;
  height: auto;
`;

const Filme = styled.div`
  ${centerFlex};
   
  img {
    width: 150px;
    height: auto;
    border-radius: 5px;
  }
`;
