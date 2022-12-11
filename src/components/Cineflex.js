import Logo from "./Logo";
import MoviesList from "./MoviesList";
import ScheduleList from "./ScheduleList";
import styled from "styled-components";
import sessions from "../SESSIONS"; // posso importar direto no ScheduleList
import SeatsList from "./SeatsList";
import Success from "./Success";
import { useState } from "react";

export default function Cineflex() {
  const [selectedMovie, setSelectedMovie] = useState({});

  const [selectedShowTime, setSelectedShowTime] = useState([]);

  const [selectedSeat, setSelectedSeat] = useState([]);

  const [name, setName] = useState('')

  const [cpf, setCpf] = useState('')

  return (
    <Body>
      <Logo />

      <MoviesList  setSelectedMovie={setSelectedMovie} />

      <ScheduleList
        sessions={sessions}
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
        setSelectedShowTime={setSelectedShowTime}
      />

      <SeatsList
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
        selectedSeat={selectedSeat}
        setSelectedSeat={setSelectedSeat}
        name={name}
        setName={setName}
        cpf={cpf}
        setCpf={setCpf}
      />

      <Success selectedMovie={selectedMovie} selectedShowTime={selectedShowTime} selectedSeat={selectedSeat} name={name} cpf={cpf}/>
    </Body>
  );
}

const Body = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  font-family: "Roboto";
`;
