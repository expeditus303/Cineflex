import styled from "styled-components";

export default function SeatCard(props) {

  const {seats} = props

  console.log('vamos '+ seats.isAvailable)

  return (
    <SeatCardStyle isAvailable={seats.isAvailable}>
      <p>{seats.name}</p>
    </SeatCardStyle>
  );
}

const SeatCardStyle = styled.button`
  background-color: ${(props) => props.isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid #808f9d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  margin-right: 7px;
  margin-bottom: 18px;

  &:nth-child(10n + 10) {
    margin-right: 0px;
  }

  p {
    font-size: 11px;
    line-height: 13px;
  }
`;
