import styled from "styled-components";

export default function SeatCard(props) {

  const {seats, selectedSeat, setSelectedSeat} = props


  function selectSeat(s) {
    if (!selectedSeat.includes(s)) {
      if (!seats.isAvailable) {
        alert('Esse assento não está disponível ')
      } /*delete this if to turn off alert, and remove the comment bellow to disable the button of selected seats*/
      console.log(!seats.isAvailable)
      const newArray = [...selectedSeat, s]
      setSelectedSeat(newArray)
    } else {
      const newArray = selectedSeat.filter((sS) => sS !== s)
      setSelectedSeat(newArray)
    }
  }

  return (
    <SeatCardStyle isAvailable={seats.isAvailable} selectedSeat={selectedSeat} seats={seats.name} onClick={() => selectSeat(seats.name)} /*disabled={!seats.isAvailable}*/>
      <p>{seats.name}</p>
    </SeatCardStyle>
  );
}

const SeatCardStyle = styled.button`
  background-color: ${(props) => {
    if (props.isAvailable) {
      if (props.selectedSeat.includes(props.seats)) {
        return "#1aae9e;"
      } return "#C3CFD9"
    } else if (!props.isAvailable) {
      return "#FBE192"
    }
    }};
  border: 1px solid #808f9d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 7px;
  margin-bottom: 18px;

  &:hover:disabled {
    cursor: default;
  }

  &:hover {
    cursor: pointer;
  }

  &:nth-child(10n + 10) {
    margin-right: 0px;
  }

  p {
    font-size: 11px;
    line-height: 13px;
    color: #000000;
  }

  &:disabled {
    color: #000000;
  }
`;
