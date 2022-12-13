import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ScheduleCard from "./ScheduleCard";
import SelectedMovie from "./SelectedMovie";
import loading from "../assets/loading.gif";

export default function Schedule(props) {
  const {
    selectedMovie,
    selectedShowTime,
    setSelectedShowTime,
    setSelectedSeat,
  } = props;

  const [sessions, setSessions] = useState(undefined);

  const navigate = useNavigate();

  window.scrollTo(0, 0);

  useEffect(() => {
    const ask = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${
        selectedMovie.id ? selectedMovie.id : "1"
      }/showtimes`
    );

    ask.then((answer) => setSessions(answer.data.days));
  }, [selectedMovie.id]);

  if (sessions === undefined) {
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
      <SelectTimeStyle>Selecione o horário</SelectTimeStyle>

      {sessions.map((d) => (
        <ScheduleCard
          key={d.id}
          days={d}
          setSelectedShowTime={setSelectedShowTime}
          setSelectedSeat={setSelectedSeat}
        />
      ))}

      <SelectedMovie
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
      />

      <Margin></Margin>
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

const Margin = styled.div`
  height: 150px;
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

const SelectTimeStyle = styled.h2`
  text-align: center;
  line-height: 110px;
  font-size: 24px;
  color: #293845;
  letter-spacing: 0.04em;
  margin-top: 67px;
`;
