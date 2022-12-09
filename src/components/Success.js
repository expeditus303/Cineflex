import styled from "styled-components";

export default function Success() {
  return (
    <>
      <SuccessStyle>Pedido feito com sucesso!</SuccessStyle>

      <InfoContainer>
        <h3 id="first">Filme e sessão</h3>
        <p>USE STATE Enola</p>
        <p>USE STATE 24/10</p>
      </InfoContainer>

      <InfoContainer>
        <h3>Ingressos</h3>
        <p>Assento USE STATE ARRAY</p>
        <p>Assento USE STATE ARRAY</p>
      </InfoContainer>

      <InfoContainer>
        <h3>Comprador</h3>
        <p>Nome: USE STATE</p>
        <p>CPF: USE STATE</p>
      </InfoContainer>

      <BackHomeButton>
        <button>Voltar pra Home</button>
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
