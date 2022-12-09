import Logo from "./Logo";
import movies from "../MOVIES"
import MoviesList from "./MoviesList";
import ScheduleList from "./ScheduleList";
import styled from "styled-components";
import sessions from "../SESSIONS"
import SeatsList from "./SeatsList";

export default function Cineflex() {
  return (
    <Body>
      <Logo />

      {/* <MoviesList movies={movies}/> */}

      <ScheduleList sessions={sessions}/>

      <SeatsList sessions={sessions}/>
    </Body>
  );
}

const Body = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  font-family: 'Roboto';
`;
