import styled from "styled-components";
import Input from "./Input";
import SeatCard from "./SeatCard";
import SelectedMovie from "./SelectedMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loading from "../assets/loading.gif";

export default function SeatsList(props) {
  const {
    selectedMovie,
    selectedShowTime,
    selectedSeat,
    setSelectedSeat,
    name,
    setName,
    cpf,
    setCpf
  } = props;

  const [seats, setSeats] = useState(undefined)

  const navigate = useNavigate();

  useEffect(() => {
    const ask = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${selectedShowTime.length !== 0 ? selectedShowTime[3] : '1'}/seats`)

    window.scrollTo(0, 0)

    ask.then(answer => setSeats(answer.data.seats))
  }, [selectedShowTime])


  
  if (seats === undefined) {
    return (
      <Loading>
        <img src={loading} alt="" />
      </Loading>
    );
  }


  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </BackButton>
      <SelectSeatStyle>Selecione o(s) assento(s)</SelectSeatStyle>

      <SeatCardContainer>
        {seats.map((s) => (
          <SeatCard
            key={s.id}
            seats={s}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
          />
        ))}
      </SeatCardContainer>

      <SeatDescriptionContainer>
        <div>
          <div id="selected"></div>
          <p>Selecionado</p>
        </div>
        <div>
          <div id="available"></div>
          <p>Disponível</p>
        </div>
        <div>
          <div id="unavailable"></div>
          <p>Indisponível</p>
        </div>
      </SeatDescriptionContainer>

      <Input name={name} setName={setName} cpf={cpf} setCpf={setCpf} selectedSeat={selectedSeat}/>

      <SelectedMovie
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
      />
    </>
  );
}

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.button`
  position: fixed;
  z-index: 2;
  top: 0;
  left: auto;
  width: 67px;
  height: 67px;
  background-color: #E8833A;;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #c3cfd9;
  border-style: none;
`;

const SelectSeatStyle = styled.h2`
  text-align: center;
  line-height: 110px;
  font-size: 24px;
  color: #293845;
  letter-spacing: 0.04em;
  margin-top: 67px;
`;

const SeatCardContainer = styled.div`
  margin: 0px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:nth-child(10n + 10) {
    margin-right: 0px;
  }
`;
const SeatDescriptionContainer = styled.div`
  margin: 7px auto 41px;
  display: flex;
  justify-content: space-between;
  width: 80%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  div p {
    line-height: 25px;
    font-size: 13px;
    color: #4e5a65;
  }

  #selected {
    background-color: #1aae9e;
    border: 1px solid #0e7d71;
  }

  #available {
    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
  }

  #unavailable {
    background-color: #fbe192;
    border: 1px solid #f7c52b;
  }
`;
