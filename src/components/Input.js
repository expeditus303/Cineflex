import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validate } from "gerador-validador-cpf";
import { IMaskInput } from "react-imask";

export default function Input(props) {
  const { name, setName, cpf, setCpf, selectedSeat } = props;

  const cpfString = cpf.toString();
  const nameString = name.toString()

  const navigate = useNavigate();

  function reserveSeats(event) {
    event.preventDefault();

    if (!validate(cpfString)) {
      alert("Insira um CPF válido");
    } else {
      let reservedSeats = {
        ids: selectedSeat,
        name: nameString,
        cpf: cpfString,
      };

      console.log(reservedSeats);

      const promisse = axios.post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        reservedSeats
      );

      promisse.then(() => navigate("/sucesso"));
    }
  }

  return (
    <InputContainer onSubmit={reserveSeats}>
      <p>Nome do comprador:</p>
      <input
        maxLength={14}
        type="text"
        placeholder="Digite seu nome..."
        value={name}
        name="Name"
        onChange={(e) => setName([e.target.value])}
        required
        data-test="client-name"
      />

      <p>CPF do comprador:</p>
      <input
        maxLength={14}
        type="number"
        placeholder="Digite seu CPF..."
        value={cpfString}
        name="CPF"
        onChange={(e) => setCpf([e.target.value])}
        required
        data-test="client-cpf"
      />

      <div>
        <button type="submit" data-test="book-seat-btn">Reservar assento(s)</button>
      </div>
    </InputContainer>
  );
}

const InputContainer = styled.form`
  margin: 0px auto;
  width: 80%;

  p {
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    margin-bottom: 6px;
    margin-left: 3px;
  }

  input {
    width: 100%;
    height: 51px;
    /* border: 1px solid #d5d5d5; */
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 35px;
    padding: 0px 14px;
  }

  input::placeholder {
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  div {
    width: 80%;
    margin: auto;
  }

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
