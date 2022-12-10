import styled from "styled-components";
import Input from "./Input";
import SeatCard from "./SeatCard";
import SelectedMovie from "./SelectedMovie";
import SEATS from "../SEATS";

export default function SeatsList(props) {
  const {
    sessions,
    selectedMovie,
    selectedShowTime,
    selectedSeat,
    setSelectedSeat,
  } = props;

  return (
    <>
      <SelectSeatStyle>Selecione o(s) assento(s)</SelectSeatStyle>

      <SeatCardContainer>
        {SEATS.seats.map((s) => (
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

      <Input />

      <SelectedMovie
        selectedMovie={selectedMovie}
        selectedShowTime={selectedShowTime}
      />
    </>
  );
}

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
