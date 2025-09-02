import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';

export default function Sessoes() {
  const { idFilme } = useParams();
  const [listaSessoes, setListaSessoes] = useState([]);

  useEffect(() => {
    if (!idFilme) return;
    axios
      .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
      .then(({ data }) => setListaSessoes(data.days))
      .catch((erro) => console.error(erro));
  }, [idFilme]);

  return (
    <Container>
      <Titulo>Selecione o horário</Titulo>
      <ListaSessoes>
        {listaSessoes.map((sessao) => (
          <Sessao key={sessao.id}>
            <InfoDia>
              {sessao.weekday} — {sessao.date}
            </InfoDia>
            <Divider/>
            <ListaHorarios>
              {sessao.showtimes.map((horario) => (
                <Horario key={horario.id} to={`/assentos/${horario.id}`}>
                  {horario.name}
                </Horario>
              ))}
            </ListaHorarios>
          </Sessao>
        ))}
      </ListaSessoes>
    </Container>
  );
}

const centroFlexivel = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${centroFlexivel};
  flex-direction: column;
  margin: 100px 0;
  gap: 32px;
  width: 90vw;
`;

const Titulo = styled.h1`
  font-family: 'Sarala', sans-serif;
  font-size: 20px;
  color: white;
`;

const ListaSessoes = styled.div`
  ${centroFlexivel};
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Sessao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  gap: 12px;
  background-color: #2B2D36;
  padding: 16px;
  border-radius: 8px;
`;

const InfoDia = styled.div`
  align-self: flex-start;
  font-family: 'Sarala', sans-serif;
  font-size: 15px;
  color: white;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #4E5A65;
  opacity: 0.6;
`;

const ListaHorarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const Horario = styled(Link)`
  ${centroFlexivel};
  width: 80px;
  height: 35px;
  background-color: #2B2D36;
  border: 2px solid #EE897F;
  border-radius: 5px;
  font-family: 'Sarala', sans-serif;
  font-size: 12px;
  color: #EE897F;
  text-decoration: none;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;