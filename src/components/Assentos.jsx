import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Assentos() {
  const { idSessao } = useParams();
  const navigate = useNavigate();
  const [sessao, setSessao] = useState(null);
  const [selecionados, setSelecionados] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (!idSessao) return;

    axios
      .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(({ data }) => setSessao(data))
      .catch((erro) => console.error("Erro ao carregar assentos:", erro));
  }, [idSessao]);

  function toggleAssento(assento) {
    if (!assento.isAvailable) return alert("Assento indisponível");

    const jaSelecionado = selecionados.find((a) => a.id === assento.id);

    if (jaSelecionado) {
      setSelecionados(selecionados.filter((a) => a.id !== assento.id));
    } else {
      setSelecionados([...selecionados, { id: assento.id, name: assento.name }]);
    }
  }

  function reservar(e) {
    e.preventDefault();
    if (selecionados.length === 0) return alert("Selecione pelo menos um assento");

    const body = {
      ids: selecionados.map((a) => a.id),
      name: nome,
      cpf: cpf
    };

    axios
      .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
      .then(() => {
        alert("Reserva realizada com sucesso!");
        navigate("/sucesso", {
          state: {
            nome,
            cpf,
            assentos: selecionados,
            sessao
          }
        });
      })
      .catch(() => alert("Erro ao reservar assentos"));
  }

  if (!sessao) return <p>Carregando...</p>;

  return (
    <Container>
      <Titulo>Selecione o(s) assento(s)</Titulo>

      <ListaAssentos>
        {sessao.seats.map((assento) => (
          <AssentoBox
            key={assento.id}
            $disponivel={assento.isAvailable}
            $selecionado={selecionados.some((a) => a.id === assento.id)}
            onClick={() => toggleAssento(assento)}
          >
            {assento.name}
          </AssentoBox>
        ))}
      </ListaAssentos>

      <Form onSubmit={reservar}>
        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite seu nome..."
          />
        </label>

        <label>
          CPF
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            placeholder="Digite seu CPF..."
          />
        </label>

        <Botao type="submit">Reservar assento(s)</Botao>
      </Form>

      <InfoSessao>
        <Poster>
          <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
        </Poster>
        <Descricao>
          <p>{sessao.movie.title}</p>
          <p>
            {sessao.day.weekday} - {sessao.name}
          </p>
        </Descricao>
      </InfoSessao>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #212226;
  margin-top: 70px;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 22px;
  margin-bottom: 20px;
`;

const ListaAssentos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90%;
  max-width: 500px;
`;

const AssentoBox = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: ${({ $disponivel }) => ($disponivel ? "pointer" : "not-allowed")};
  background-color: ${({ $disponivel, $selecionado }) => {
    if (!$disponivel) return "#3a3a3a";
    if ($selecionado) return "#FADBC5";
    return "#9DB899";
  }};
  border: ${({$selecionado}) => {
    if ($selecionado) return "2px solid #EE897F";
  }};
  color: ${({ $disponivel }) => ($disponivel ? "#000" : "#fff")};
  font-family: 'Roboto', sans-serif;

  &:hover {
    opacity: ${({ $disponivel }) => ($disponivel ? 0.8 : 1)};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  label {
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
  }
`;

const Botao = styled.button`
  background-color: #f17c7c;
  color: #2B2D36;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;

const InfoSessao = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #2c2c2c;
  padding: 10px;
  border-radius: 4px;
  color: white;
  margin-top: auto;
`;

const Poster = styled.div`
  width: 60px;
  img {
    width: 100%;
    border-radius: 4px;
  }
`;

const Descricao = styled.div`
  p {
    margin: 0;
    font-size: 14px;
  }
`;