import styled from "styled-components";

export default function MovieCard(props) {
  const { movies, setSelectedMovie, setSelectedShowTime, setSelectedSeat } = props;

  function selectMovie(s) {
    setSelectedMovie(s);
    setSelectedShowTime([]);
    setSelectedSeat([]);
  }

  return (
    <MovieCardContainer className="container" onClick={() => selectMovie(movies)} data-test="movie">
      <img src={movies.posterURL} alt="" />
      <HiddenName className="overlay">
        <div>{movies.title}</div>
      </HiddenName>
    </MovieCardContainer>
  );
}

const MovieCardContainer = styled.div`
  width: 129px;
  height: 193px;
  margin-bottom: 27px;
  position: relative;

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .overlay {
    height: 100%;
  }
`;

const HiddenName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.85;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;

  div {
    color: white;
    font-size: 16px;
    position: absolute;
    font-weight: 700;
    line-height: 20px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
