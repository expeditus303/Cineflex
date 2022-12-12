import styled from "styled-components";

export default function SeatCard(props) {

  const {seats, selectedSeat, setSelectedSeat} = props

  function selectSeat(id, name) {
    if (!selectedSeat.includes(id)) {
      if (!seats.isAvailable) {
        alert('Esse assento não está disponível ')
      } /*delete this if to turn off alert, and remove the comment bellow to disable the button of selected seats*/
    
      const newArray = [...selectedSeat, id]
      setSelectedSeat(newArray)
      console.log(selectedSeat)
    } else {
      const newArray = selectedSeat.filter((sS) => sS !== id)
      setSelectedSeat(newArray)
    }
  }

  return (
    <SeatCardStyle isAvailable={seats.isAvailable} selectedSeat={selectedSeat} seats={seats.id} onClick={() => selectSeat(seats.id, seats.name)} /*disabled={!seats.isAvailable}*/>
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
