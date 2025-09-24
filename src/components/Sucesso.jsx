import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <TextoPedido>Pedido finalizado!</TextoPedido>

      <Pedido>
        <Informacoes>
          <Info>
            <Titulo>Filme e sessão</Titulo>
            <Linha />
            <p>{state.sessao.movie.title}</p>
            <p>{state.sessao.day.weekday} - {state.sessao.name}</p>
          </Info>

          <Info>
            <Titulo>Ingressos</Titulo>
            <Linha />
            {state.assentos.map((assento) => (
              <p key={assento.id}>Assento {assento.name}</p>
            ))}
          </Info>

          <Info>
            <Titulo>Comprador(a)</Titulo>
            <Linha />
            <p>Nome: {state.nome}</p>
            <p>CPF: {state.cpf}</p>
          </Info>
        </Informacoes>
      </Pedido>

      <Botao onClick={() => navigate("/")}>
        Voltar para tela inicial
      </Botao>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212226;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  font-family: 'Sarala', sans-serif;
`;

const TextoPedido = styled.h1`
  color: #9db899;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Pedido = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2b2d36;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  width: 90%;
  max-width: 400px;
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
`;

const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #ee897f;
  margin: 0;
`;

const Linha = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #3a3c47;
  margin: 4px 0 8px;
`;

const Botao = styled.button`
  margin-top: 20px;
  background-color: #ee897f;
  color: #2B2D36;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Sarala', sans-serif;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  width: 90%;
  max-width: 400px;

  &:hover {
    opacity: 0.9;
  }
`;
