import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success(props) {

  const { selectedMovie, setSelectedMovie, selectedShowTime, setSelectedShowTime, selectedSeat, setSelectedSeat, name, setName, cpf, setCpf } = props

  const navigate = useNavigate();

  window.scrollTo(0, 0)

  function restart() {
    setSelectedMovie({})
    setSelectedShowTime([])
    setSelectedSeat([])
    setName("")
    setCpf("")

    return navigate("/")
  }

  return (
    <>
      <SuccessStyle>Pedido feito com sucesso!</SuccessStyle>

      <InfoContainer data-test="movie-info">
        <h3 id="first">Filme e sessão</h3>
        <p>{selectedMovie.title}</p>
        <p>{selectedShowTime[2]} {selectedShowTime[0]}</p>
      </InfoContainer>

      <InfoContainer data-test="seats-info">
        <h3>Ingressos</h3>
        {selectedSeat.map((s) => (
          <p key={s}>Assento {s > 50 ? s % 50 : s}</p>
        ))}
      </InfoContainer>

      <InfoContainer data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </InfoContainer>

      
      <BackHomeButton>
        <button onClick={restart} data-test="go-home-btn">Voltar pra Home</button>
      </BackHomeButton>
    </>
  );
}

const SuccessStyle = styled.h2`
  text-align: center;
  line-height: 110px;
  font-size: 24px;
  color: #293845;
  letter-spacing: 0.04em;
  margin-top: 67px;
  font-weight: 700;
  color: #247a6b;
`;

const InfoContainer = styled.div`
  color: #293845;
  letter-spacing: 0.04em;
  margin: 0px 30px;

  #first {
    margin-top: 0px;
  }

  h3 {
    margin: 30px 0px 6px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  p {
    font-size: 22px;
    line-height: 26px;
  }
`;

const BackHomeButton = styled.div`
  margin: 30px auto 0px;
  width: 80%;
  display: flex;
  justify-content: center;

  button {
    margin: 15px auto 150px;
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    font-weight: 600;
  }
`;
