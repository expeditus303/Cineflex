import Logo from "./Logo";
import movies from "../MOVIES";
import MoviesList from "./MoviesList";
import ScheduleList from "./ScheduleList";
import styled from "styled-components";
import sessions from "../SESSIONS";
import SeatsList from "./SeatsList";
import Success from "./Success";
import { useState } from "react";

export default function Cineflex() {
  const [selectedMovie, setSelectedMovie] = useState({});

  const [selectedShowTime, setSelectedShowTime] = useState([]);

  const [selectedSeat, setSelectedSeat] = useState([]);

  console.log(selectedSeat)

  return (
    <Body>
      <Logo />

      <MoviesList movies={movies} setSelectedMovie={setSelectedMovie} />

      <ScheduleList
        sessions={sessions}
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
        setSelectedShowTime={setSelectedShowTime}
      />

      <SeatsList
        sessions={sessions}
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
        selectedSeat={selectedSeat}
        setSelectedSeat={setSelectedSeat}
      />

      <Success />
    </Body>
  );
}

const Body = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  font-family: "Roboto";
`;
