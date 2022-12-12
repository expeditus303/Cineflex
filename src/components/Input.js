import axios from "axios";
import styled from "styled-components";

export default function Input(props) {
  const { name, setName, cpf, setCpf, selectedSeat } = props;



  function reserveSeats(event){  
    event.preventDefault()

    let reservedSeats = {
      ids: selectedSeat,
      name: name,
      cpf: cpf
    }

    const promisse = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservedSeats)

    promisse.then(() => alert('Assentos reservados com sucesso'))

    console.log(reservedSeats)
  }
 



  return (
    <InputContainer>
      <p>Nome do comprador:</p>
      <input
        type="text"
        placeholder="Digite seu nome..."
        value={name}
        onChange={(e) => setName([e.target.value])}
        required
      />

      <p>CPF do comprador:</p>
      <input
        type="number"
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) => setCpf([e.target.value])}
        required
      />

      <div>
        <button type="submit" onClick={reserveSeats}>Reservar assento(s)</button>
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
    border: 1px solid #d5d5d5;
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
