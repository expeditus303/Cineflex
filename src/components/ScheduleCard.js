import { Link } from "react-router-dom";
import styled from "styled-components";
import ScheduleCardTime from "./ScheduleCardTime";

export default function ScheduleCard(props) {
  const { days, setSelectedShowTime, setSelectedSeat } = props;

  return (
    <>
      <ScheduleCardContainer>
        <p>
          {days.weekday} - {days.date}
        </p>
        <div id="sim">
          {days.showtimes.map((s) => (
            <Link to={`/assentos/${s.id}`} key={s.id}>
              <ScheduleCardTime
                key={s.id}
                id={s.id}
                showtimes={s}
                weekday={days.weekday}
                date={days.date}
                setSelectedShowTime={setSelectedShowTime}
                setSelectedSeat={setSelectedSeat}
              />
            </Link>
          ))}
        </div>
      </ScheduleCardContainer>
    </>
  );
}


const ScheduleCardContainer = styled.div`
  margin: 0px 25px;
  color: #293845;
  font-size: 20px;
  letter-spacing: 0.02em;

  div {
    display: flex;
    margin: 23px 0px;
  }

  button {
    margin-right: 8px;
    width: 85px;
    height: 45px;
    border: none;
    border-radius: 3px;
    background-color: #e8833a;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 0.02em;
  }

  button:hover {
    cursor: pointer;
  }
`;

const MovieSelectedContainer = styled.div``;
